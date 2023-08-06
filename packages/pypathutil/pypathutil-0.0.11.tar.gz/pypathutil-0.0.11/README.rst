# pypathutil

Command line utilities to help you work with paths.

## What is it for ?

have you even done calculations of paths in shells of the form:

    $ export PATH=$PATH:$HOME/bin

And did you get upset when the path came out wrong? either repeated
elements, extra colons, wrong order and the like?

This is the end of your troubles.

## Examples

    $ export PATH=$(pypathutil_add $PATH /usr/games/bin)

This is the same as adding:

    $ export PATH=$(pypathutil_add --head $PATH /usr/games/bin)

Which means adding to the head of the path.

If you want to add to the tail of the path just use:

    $ export PATH=$(pypathutil_add --tail $PATH /usr/games/bin)

If you are on windows and want a different separator

    $ export PATH=$(pypathutil_add --separator \; $PATH /usr/games/bin)

But default pypathutil will remove duplicate entries,
remove non absolute paths, and remove folders which do not exist.
All of these can be controlled with appropriate flags.

## Installing

    $ pip3 install pypathutil --user

to install in your home directory or

    $ sudo -H pip3 install pypathutil

to install for all users on the system.

If you don't have pip3 then you can probably get it using:

    $ sudo apt install python3-pip

## Performance

After doing a little performance work it dawned on me that writing bash
code to do the same will be much faster. And I actually wrote bash
functions to implement all of this but this package is still my best
suggestion for people who want a solid foundation (bash can not be
called solid).

## Using pypathutil API

You can, of course, use pypathutil for it's API as a python module.
It's quite intuitive.

Mark Veltzer <mark.veltzer@gmail.com>