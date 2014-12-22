// © 2014 the DefinitelyApl Authors under the WTFPL license. See AUTHORS for the list of authors.

import Tokenizer = require("./tokenizer");

// Operand
export function parseOperand(input: Tokenizer.TokenList, explain?: boolean) {
	// ( expr )
	if (input.current.type === Tokenizer.t.ParenOpn) {
		var expr = [];

		input.advance();
		while (input.current.type !== Tokenizer.t.Eof && input.current.type !== Tokenizer.t.ParenCls) {
			expr.push(input.current);
			input.advance();
		}
		return parseExpr(new Tokenizer.TokenList(expr));
	}
	// number
	if (input.current.type === Tokenizer.t.Num) {
		return input.current.value;
	}
}

// Expr
export function parseExpr(input: Tokenizer.TokenList, explain?: boolean) {
	// operand
	if (input.current.eof) {
		throw new Error("ERROR: parsing eof")
	} if (input.peek.eof) { // operand
		return parseOperand(input);
	} if (input.current.type == Tokenizer.t.ParenOpn) { // ( expr )
		return parseOperand(input);
	} else { // operand binop expr
		var operand = parseOperand(new Tokenizer.TokenList([input.current])),
			binOp = input.peek,
			expr = parseExpr(input.rest.rest);
		if (explain)
			console.log("[Expr: " +
				"operand: [" + Tokenizer.t[operand] + "] " +
				"binOp: " + binOp + " " +
				"expr: " + expr + "]");
		return binOp.value(operand, expr);
	}
}
