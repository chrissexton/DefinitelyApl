// © 2014 the DefinitelyApl Authors under the WTFPL license. See AUTHORS for the list of authors.

/// <reference path="tokenizer.ts" />
/// <reference path="parser.ts" />

module Apl {
	export function evalStr(input: string, explain?: boolean): number {
		var tokens = Tokenizer.tokenize(input, explain),
			expr = Parser.parseExpr(tokens, explain);
		return expr;
	}
}
