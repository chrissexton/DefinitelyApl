#!/bin/sh

if [ ! -d src/typings ]; then
	./node_modules/.bin/tsd reinstall
	./node_modules/.bin/tsd rebundle
fi

./node_modules/.bin/tsc --target es5 -m amd --out testApl.js src/testApl.ts

echo "You may test the interpreter by using:"
echo "  node testApl <list of string expressions>"
