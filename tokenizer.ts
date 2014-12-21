// © 2014 the DefinitelyApl Authors under the WTFPL license. See AUTHORS for the list of authors.

module Tokenizer {
	export enum t {
		Add,
		Sub,
		Mul,
		Div,
		Pow,
		ParenOpn,
		ParenCls,
		Num,
		Eof,
	}

	class Token {
		type: t
		value: any

		constructor(type: t, value?: any) {
			this.type = type;
			this.value = value;
		}

		get eof() {
			return this.type === t.Eof;
		}

		static get Eof() {
			return new Token(t.Eof);
		}

		public toString() {
			var value = this.value;

			if (typeof(value) === 'function') value = 'Func';
			return "[Type: " + t[this.type] + (value ? " value: " + value : "") + "]";
		}
	}

	export class TokenList {
		ptr: number

		constructor(public tokens: Token[]) {
			this.ptr = 0;
		}

		private access(offset: number) {
			if (this.ptr+offset >= this.tokens.length) return Token.Eof;
			return this.tokens[this.ptr+offset];
		}

		get current(): Token {
			return this.access(0);
		}

		get peek(): Token {
			return this.access(1);
		}

		get rest(): TokenList {
			return new TokenList(this.tokens.slice(1));
		}

		advance() {
			this.ptr++;
		}
	}

	var ops = {
		'+': new Token(t.Add, (r: number, l: number)=>{return r+l;}),
		'-': new Token(t.Sub, (r: number, l: number)=>{return r-l;}),
		'*': new Token(t.Mul, (r: number, l: number)=>{return r*l;}),
		'/': new Token(t.Div, (r: number, l: number)=>{return r/l;}),
		// TODO: enable after tokenizer is smarter
		// '**': new Token(t.Pow, (r: number, l: number)=>{return Math.pow(r,l);}),
	}

	function parseNum(input: string): Token {
		var re = new RegExp("[0-9.]+");
		if (re.test(input)) {
			return new Token(t.Num, Number(input));
		} else {
			return null;
		}
	}

	export function tokenize(input: string, explain?: boolean): TokenList {
		// TODO: This currently requires a space to separate tokens, stop it!
		var tokens = input,
			output = [],
			buffer = "";

		for (var i = 0, raw = tokens[i]; i < tokens.length+1; i++, raw = tokens[i]) {
			if (raw === ' ' || i == tokens.length) { // end token!
				if (ops[buffer] !== undefined) {
					output.push(ops[buffer]);
				} else if (buffer === '(') {
					output.push(new Token(t.ParenOpn));
				} else if (buffer === ')') {
					output.push(new Token(t.ParenCls));
				} else if (parseNum(buffer) !== null) {
					output.push(parseNum(buffer));
				} else {
					throw new Error("ERROR: Invalid token at " + raw);
				}
				buffer = "";
				if (explain)
					console.log("Found token: " + output[output.length-1]);
			} else {
				buffer += raw;
			}
		}

		return new TokenList(output);
	}
}
