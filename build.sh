#!/bin/sh

npm install
./node_modules/.bin/tsd reinstall
./node_modules/.bin/tsd rebundle
./node_modules/.bin/tsc --target es5 -m amd --out testApl.js testApl.ts

echo "You may test the interpreter by using:"
echo "  node testApl <list of string expressions>"
