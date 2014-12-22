#!/bin/sh

if [ ! -d src/typings ]; then
	./node_modules/.bin/tsd reinstall
	./node_modules/.bin/tsd rebundle
fi

./node_modules/.bin/tsc --target es5 -m commonjs src/_all.ts
