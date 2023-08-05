Functions related to terminals.

*Latest release 20200521*:
* New status() function dragged in from cs.logutils, which uses cs.upd for status() -- needs some refactoring to match with the other functions in cs.tty -- text vs bytes, stdout vs stderr, etc.
* Get warning() from cs.gimmicks.

## Function `setupterm(*args)`

Run curses.setupterm, needed to be able to use the status line.
Uses a global flag to avoid doing this twice.

## Function `status(msg, *args, **kwargs)`

Write a message to the terminal's status line.

Parameters:
* `msg`: message string
* `args`: if not empty, the message is %-formatted with `args`
* `file`: optional keyword argument specifying the output file.
  Default: `sys.stderr`.

Hack: if there is no status line use the xterm title bar sequence :-(

## Function `statusline(text, fd=None, reverse=False, xpos=None, ypos=None)`

Update the status line.

## Function `statusline_bs(text, reverse=False, xpos=None, ypos=None)`

Return a byte string to update the status line.

## Function `ttysize(fd)`

Return a (rows, columns) tuple for the specified file descriptor.

If the window size cannot be determined, None will be returned
for either or both of rows and columns.

This function relies on the UNIX `stty` command.

## Class `WinSize(builtins.tuple)`

WinSize(rows, columns)

# Release Log



*Release 20200521*:
* New status() function dragged in from cs.logutils, which uses cs.upd for status() -- needs some refactoring to match with the other functions in cs.tty -- text vs bytes, stdout vs stderr, etc.
* Get warning() from cs.gimmicks.

*Release 20190101*:
Small bugfix for setupterm.

*Release 20170903*:
add statusline and statusline_s functions; ttysize: support BSD stty output format

*Release 20160828*:
Use "install_requires" instead of "requires" in DISTINFO, add PyPI category.

*Release 20150116*:
Initial PyPI release.
