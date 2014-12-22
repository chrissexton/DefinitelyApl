# DefinitelyApl

This is a little interpreter in the style of APL. The current version (0.0.1) is 
only a calculator and does not do any of the great matrix operations APL supports.

## Building

You will need a copy of Node.js and npm to follow these instructions.

A build script is provided, just run `npm install`. It will go nuts for a few 
moments, and `src/testApl.js` wil pop out.  If you prefer to do things manually, 
you will need: node, typescript, and tsd. After this, you may run `./build.sh` or
`npm run build` to generate the `testapl.js` file.

## Usage

A "dumb" driver is provided that will run strings 
aganist the interpreter. Just run the built `src/testApl.js` file with node and
provide strings as arguments.

In addition, there are tests that can be executed with `npm test`.

Documentation can be generated with `npm run doc`.
