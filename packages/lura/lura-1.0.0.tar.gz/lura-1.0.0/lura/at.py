'''
Periodic task scheduler.

Usage examples:

```
from lura import at

def cycle_log_files() -> None:
  print('Cycling log files')
  # ... etc

def stash_log_files() -> None:
  print('Stashing log files')
  # ... etc

scheduler = at.Scheduler()
scheduler.schedule(at.every().day.at('00:15'), cycle_log_files)
scheduler.schedule(at.every().day.at('00:30'), stash_log_files)
scheduler.start()
```
'''

# the `schedule` module from pypi does the hard work for us. the at module:
#
# - provides a main loop which tries to keep the scheduler running in spite of
#   unhandled exceptions
# - ensures that scheduled tasks run in threads so that one task will not block others
# - optionally ensures that only one invocation of a task may be running at a time

import logging
import schedule as pyschedule # type: ignore
import threading
from lura.threads import Thread
from schedule import every
from time import sleep
from typing import Any, Callable, Mapping, Optional, Sequence, Tuple, Type
from typing_extensions import Protocol

logger = logging.getLogger(__name__)

class Task(Protocol):
  'Task protocol for use with `Scheduler`.'

  def __init__(
    self,
    target: Callable,
    args: Optional[Sequence[Any]],
    kwargs: Optional[Mapping[Any, Any]],
    reenter: bool,
  ) -> None:
    ...

  @property
  def name(self) -> str:
    return ''

  def run(self) -> None:
    ...

class _Task:
  'Run a scheduled task in a thread.'

  _target: Callable
  _args: Sequence[Any]
  _kwargs: Mapping[str, Any]
  _lock: Optional[threading.Lock]
  _name: str

  def __init__(
    self,
    target: Callable,
    args: Optional[Sequence[Any]],
    kwargs: Optional[Mapping[Any, Any]],
    reenter: bool,
  ) -> None:

    super().__init__()
    self._target = target # type: ignore
    self._args = []
    if args is not None:
      self._args.extend(args)
    self._kwargs = {}
    if kwargs is not None:
      self._kwargs.update(kwargs)
    self._lock = None
    if not reenter:
      # - a task is reentrant when a new invocation of the task may be started
      #   before a previous invocation has finished
      # - a task is not reentrant when only one invocation of the task may
      #   run at a time
      self._lock = threading.Lock()
    self._name = f'{self._target.__module__}.{self._target.__name__}'

  @property
  def name(self) -> str:
    return self._name

  def run(self) -> None:
    cls_name = f'{type(self).__module__}.{type(self).__name__}'
    Thread.spawn(target=self._work, name=f'{cls_name} <{self.name}>')

  def _work(self) -> None:
    log = logger[self.log_level] # type: ignore
    if self._lock:
      if not self._lock.acquire(blocking=False):
        log(f"Scheduled task is already running, not starting: {self.name}")
        return
    try:
      log(f'Starting scheduled task: {self.name}')
      self._target(*self._args, **self._kwargs)
    except Exception:
      log(f'Unhandled exception in scheduled task: {self.name}', exc_info=True)
    finally:
      if self._lock:
        self._lock.release()
      log(f'Finished scheduled task: {self.name}')

class Scheduler:
  'Periodic task scheduler.'

  log_level = logging.INFO
  task_cls: Type[Task] = _Task

  _working: bool

  def __init__(self) -> None:
    super().__init__()
    self._working = False

  def _format_task(self, job: pyschedule.Job, task: Task) -> str:
    'Return a string describing a job and task.'

    if job.at_time is not None:
      return '%s every %s %s at %s' % (
        task.name,
        job.interval,
        job.unit[:-1] if job.interval == 1 else job.unit,
        job.at_time,
      )
    else:
      fmt = (
        '%(name)s every %(interval)s ' +
        'to %(latest)s ' if job.latest is not None else '' +
        '%(unit)s'
      )
      return fmt % dict(
        name = task.name,
        interval = job.interval,
        latest = job.latest,
        unit = job.unit[:-1] if job.interval == 1 else job.unit,
      )

  def _work(self) -> None:
    'Scheduler main loop.'

    if self._working:
      raise RuntimeError('Already working')
    self._working = True
    log = logger[self.log_level] # type: ignore
    log('Task scheduler starting')
    try:
      while self._working:
        try:
          pyschedule.run_pending()
        except Exception:
          log('Unhanlded exception in task scheduler', exc_info=True)
        finally:
          sleep(1)
    finally:
      self._working = False
      log('Task scheduler stopped')

  def start(self) -> None:
    self._work()

  def stop(self) -> None:
    self._working = False

  def schedule(
    self,
    job: pyschedule.Job, 
    target: Callable,
    args: Optional[Sequence[Any]] = None,
    kwargs: Optional[Mapping[str, Any]] = None,
    reenter: bool = True,
  ) -> None:
    'Schedule a task.'

    task = self.task_cls(target=target, args=args, kwargs=kwargs, reenter=reenter)
    log = logger[self.log_level] # type: ignore
    log(f'Scheduling {self._format_task(job, task)}')
    job.do(task.run)
