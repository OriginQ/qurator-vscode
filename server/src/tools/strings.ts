/**
 * This handler provides the function about the string.
 */

'use strict';

export function startsWith(haystack: string, needle: string): boolean {
	if (haystack.length < needle.length) {
		return false;
	}

	for (let i = 0; i < needle.length; i++) {
		if (haystack[i] !== needle[i]) {
			return false;
		}
	}

	return true;
}

/**
 * Determines if haystack ends with needle.
 */
export function endsWith(haystack: string, needle: string): boolean {
	let diff = haystack.length - needle.length;
	if (diff > 0) {
		return haystack.lastIndexOf(needle) === diff;
	} else if (diff === 0) {
		return haystack === needle;
	} else {
		return false;
	}
}

/**
 * @returns the length of the common prefix of the two strings.
 */
export function commonPrefixLength(a: string, b: string): number {

	let i: number,
		len = Math.min(a.length, b.length);

	for (i = 0; i < len; i++) {
		if (a.charCodeAt(i) !== b.charCodeAt(i)) {
			return i;
		}
	}

	return len;
}

export function repeat(value: string, count: number) {
	var s = '';
	while (count > 0) {
		if ((count & 1) === 1) {
			s += value;
		}
		value += value;
		count = count >>> 1;
	}
	return s;
}

const _a = 'a'.charCodeAt(0);
const _z = 'z'.charCodeAt(0);
const _A = 'A'.charCodeAt(0);
const _Z = 'Z'.charCodeAt(0);
const _0 = '0'.charCodeAt(0);
const _9 = '9'.charCodeAt(0);

export function isLetterOrDigit(text: string, index: number) {
	let c = text.charCodeAt(index);
	return (_a <= c && c <= _z) || (_A <= c && c <= _Z) || (_0 <= c && c <= _9);
}

export function getWordAtText(text: string, offset: number, wordDefinition: RegExp): { start: number, length: number } {
	let lineStart = offset;
	while (lineStart > 0 && !isNewlineCharacter(text.charCodeAt(lineStart - 1))) {
		lineStart--;
	}
	let offsetInLine = offset - lineStart;
	let lineText = text.substr(lineStart);

	// make a copy of the regex as to not keep the state
	let flags = wordDefinition.ignoreCase ? 'gi' : 'g';
	wordDefinition = new RegExp(wordDefinition.source, flags);

	let match = wordDefinition.exec(lineText);
	while (match && match.index + match[0].length < offsetInLine) {
		match = wordDefinition.exec(lineText);
	}
	if (match && match.index <= offsetInLine) {
		return { start: match.index + lineStart, length: match[0].length };
	}

	return { start: offset, length: 0 };
}

export function isWhitespaceOnly(str: string) {
	return /^\s*$/.test(str);
}

export function isEOL(content: string, offset: number) {
	return isNewlineCharacter(content.charCodeAt(offset));
}

const CR = '\r'.charCodeAt(0);
const NL = '\n'.charCodeAt(0);
export function isNewlineCharacter(charCode: number) {
	return charCode === CR || charCode === NL;
}