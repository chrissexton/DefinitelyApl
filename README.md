# DefinitelyApl

This is a little interpreter in the style of APL. The current version (0.0.1) is 
only a calculator and does not do any of the great matrix operations APL supports.

## Building

A build script is provided, just run `./build.sh`. It will go nuts for a few 
moments, and `testApl.js` wil pop out.  If you prefer to do things manually, 
you will need: node, typescript, and tsd.

## Usage

There are no great tests yet, but a driver is provided that will run strings 
aganist the interpreter. Just run the built `testApl.js` file with node and
provide strings as arguments.
