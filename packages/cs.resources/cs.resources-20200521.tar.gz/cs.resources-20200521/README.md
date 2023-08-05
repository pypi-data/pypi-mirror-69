Resource management classes and functions.

*Latest release 20200521*:
Sweeping removal of cs.obj.O, universally supplanted by types.SimpleNamespace.

## Class `ClosedError(builtins.Exception,builtins.BaseException)`

Exception for operations invalid when something is closed.

## Class `MultiOpen(MultiOpenMixin)`

Context manager class that manages a single open/close object
using a MultiOpenMixin.

### Method `MultiOpen.__init__(self, openable, finalise_later=False)`

Initialise: save the `openable` and call the MultiOpenMixin initialiser.

## Class `MultiOpenMixin`

A mixin to count open and close calls, and to call `.startup`
on the first `.open` and to call `.shutdown` on the last `.close`.

Recommended subclass implementations do as little as possible
during `__init__`, and do almost all setup during startup so
that the class may perform multiple startup/shutdown iterations.

If used as a context manager this mixin calls `open()`/`close()` from
`__enter__()` and `__exit__()`.

Multithread safe.

Classes using this mixin need to define `.startup` and `.shutdown`.

### Method `MultiOpenMixin.__init__(self, finalise_later=False)`

Initialise the `MultiOpenMixin` state.

Parameters:
* `finalise_later`: do not notify the finalisation `Condition`
  on shutdown, instead require a separate call to `.finalise()`.
  This is mode is useful for objects such as queues where
  the final close prevents further `.put` calls, but users
  calling `.join` may need to wait for all the queued items
  to be processed.

TODO:
* `subopens`: if true (default false) then `.open` will return
  a proxy object with its own `.closed` attribute set by the
  proxy's `.close`.

## Function `not_closed(func)`

Decorator to wrap methods of objects with a .closed property
which should raise when self.closed.

## Class `Pool`

A generic pool of objects on the premise that reuse is cheaper than recreation.

All the pool objects must be suitable for use, so the
`new_object` callable will typically be a closure.
For example, here is the __init__ for a per-thread AWS Bucket using a
distinct Session:

    def __init__(self, bucket_name):
        Pool.__init__(self, lambda: boto3.session.Session().resource('s3').Bucket(bucket_name)

### Method `Pool.__init__(self, new_object, max_size=None, lock=None)`

Initialise the Pool with creator `new_object` and maximum size `max_size`.

Parameters:
* `new_object` is a callable which returns a new object for the Pool.
* `max_size`: The maximum size of the pool of available objects saved for reuse.
    If omitted or `None`, defaults to 4.
    If 0, no upper limit is applied.
* `lock`: optional shared Lock; if omitted or `None` a new Lock is allocated

## Class `RunState`

A class to track a running task whose cancellation may be requested.

Its purpose is twofold, to provide easily queriable state
around tasks which can start and stop, and to provide control
methods to pronounce that a task has started (`.start`),
should stop (`.cancel`)
and has stopped (`.stop`).

A `RunState` can be used as a context manager, with the enter
and exit methods calling `.start` and `.stop` respectively.
Note that if the suite raises an exception
then the exit method also calls `.cancel` before the call to `.stop`.

Monitor or daemon processes can poll the `RunState` to see when
they should terminate, and may also manage the overall state
easily using a context manager.
Example:

    def monitor(self):
        with self.runstate:
            while not self.runstate.cancelled:
                ... main loop body here ...

A `RunState` has three main methods:
* `.start()`: set `.running` and clear `.cancelled`
* `.cancel()`: set `.cancelled`
* `.stop()`: clear `.running`

A `RunState` has the following properties:
* `cancelled`: true if `.cancel` has been called.
* `running`: true if the task is running.
  Further, assigning a true value to it also sets `.start_time` to now.
  Assigning a false value to it also sets `.stop_time` to now.
* `start_time`: the time `.running` was last set to true.
* `stop_time`: the time `.running` was last set to false.
* `run_time`: `max(0,.stop_time-.start_time)`
* `stopped`: true if the task is not running.
* `stopping`: true if the task is running but has been cancelled.
* `notify_start`: a set of callables called with the `RunState` instance
  to be called whenever `.running` becomes true.
* `notify_end`: a set of callables called with the `RunState` instance
  to be called whenever `.running` becomes false.
* `notify_cancel`: a set of callables called with the `RunState` instance
  to be called whenever `.cancel` is called.

## Class `RunStateMixin`

Mixin to provide convenient access to a `RunState`.

Provides: `.runstate`, `.cancelled`, `.running`, `.stopping`, `.stopped`.

### Method `RunStateMixin.__init__(self, runstate=None)`

Initialise the `RunStateMixin`; sets the `.runstate` attribute.

`runstate`: `RunState` instance or name.
If a `str`, a new `RunState` with that name is allocated.

# Release Log



*Release 20200521*:
Sweeping removal of cs.obj.O, universally supplanted by types.SimpleNamespace.

*Release 20190812*:
* MultiOpenMixin: no longer subclass cs.obj.O.
* MultiOpenMixin: remove `lock` param support, the mixin has its own lock.
* MultiOpen: drop `lock` param support, no longer used by MultiOpenMixin.
* MultiOpenMixin: do finalise inside the lock for the same reason as shutdown (competition with open/startup).
* MultiOpenMixin.close: new `unopened_ok=False` parameter intended for callback closes which might fire even if the initial open does not occur.

*Release 20190617*:
RunState.__exit__: if an exception was raised call .canel() before calling .stop().

*Release 20190103*:
* Bugfixes for context managers.
* MultiOpenMixin fixes and changes.
* RunState improvements.

*Release 20171024*:
* bugfix MultiOpenMixin finalise logic and other small logic fixes and checs
* new class RunState for tracking or controlling a running task

*Release 20160828*:
Use "install_requires" instead of "requires" in DISTINFO.

*Release 20160827*:
* BREAKING CHANGE: rename NestingOpenCloseMixin to MultiOpenMixin.
* New Pool class for generic object reuse.
* Assorted minor improvements.

*Release 20150115*:
First PyPI release.
