// © 2014 the DefinitelyApl Authors under the WTFPL license. See AUTHORS for the list of authors.

/// <reference path="../typings/tsd.d.ts" />

import chai = require("chai");
import Apl = require("../apl");

var expect = chai.expect;

describe("Apl", function() {
	it("should eval 1+1", function() {
		var input = "1 + 1";
		expect(Apl.evalStr(input)).to.equal(2);
	});

	it("should eval 2*2", function() {
		var input = "2 * 2";
		expect(Apl.evalStr(input)).to.equal(4);
	});

	it("should eval 2**3", function() {
		var input = "2 ** 3";
		expect(Apl.evalStr(input)).to.equal(8);
	});
});
