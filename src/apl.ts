// © 2014 the DefinitelyApl Authors under the WTFPL license. See AUTHORS for the list of authors.

/// <reference path="tokenizer.ts" />
/// <reference path="parser.ts" />

import Tokenizer = require("./tokenizer");
import Parser = require("./parser");

export function evalStr(input: string, explain?: boolean): number {
	var tokens = Tokenizer.tokenize(input, explain),
		expr = Parser.parseExpr(tokens, explain);
	return expr;
}
