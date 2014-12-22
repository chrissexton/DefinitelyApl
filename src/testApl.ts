// © 2014 the DefinitelyApl Authors under the WTFPL license. See AUTHORS for the list of authors.

/// <reference path="typings/tsd.d.ts" />

/**
  This is a little node runnable test to use
  until I write real tests

  Usage:
    node aplTest.js <list of strings to eval>
**/

import Apl = require("./apl");

process.argv.forEach(function (arg, idx) {
	if (idx < 2) return;
	console.log("Evaluating: " + arg);
	console.log(Apl.evalStr(arg));
});
