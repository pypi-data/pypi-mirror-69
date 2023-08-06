# N-Body Python Class

Authors:
* Jacques Féjoz: [fejoz@ceremade.dauphine.fr](fejoz@ceremade.dauphine.fr)
* Maxime Chupin: [chupin@ceremade.dauphine.fr](chupin@ceremade.dauphine.fr)

## Purpose

_We are in development, and this is the beginning of the project! It is a beta version of the module._

The package provides tools for studying the N-body problem. It
provides a sub package concerning the Restricted Circular Three Body
Problem, with the computation of periodic orbit around Libration
points and associated invariant manifolds.



## Installation

### `pip`

### `PYTHONPATH`

`PYTHONPATH` sets the search path for importing python modules. So, a
reasonable way to use `nbodypy` is to install it using the `PYTHONPATH`
mechanism.

Suppose that we have a directory in which we want to put all the local
python package or modules: `/home/LOGIN/the/path`.

You can export this directory to the environment variable `PYTHONPATH`
(in your `.bashrc` for example) :

    export PYTHONPATH=/home/LOGIN/the/path:$PYTHONPATH

### Add the `nbodypy` directory

After doing that, you just have to add the `nbodypy` directory of the
git repository (containing the python files) in the python directory:

    /home/LOGIN/the/path/nbodypy

## Documentation

You can find a (partial) documentation at :

[https://www.ceremade.dauphine.fr/~chupin/nbodypydoc/](https://www.ceremade.dauphine.fr/~chupin/nbodypydoc/)

## License

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see [http://www.gnu.org/licenses](http://www.gnu.org/licenses).
