/**
 * This ts file provides the qrunes language parser function.
 */

'use strict';

import { createScanner } from './qrunesScanner';
import { findFirst } from '../../tools/arrays';
import { TokenType } from '../qrunesLanguageTypes';

export class Node {
	public tag: string | undefined;
	public closed: boolean = false;
	constructor(public start: number, public end: number, public children: Node[], public parent?: Node) {
	}
	public isSameTag(tagInLowerCase: string) {
		return this.tag && tagInLowerCase && this.tag.length === tagInLowerCase.length && this.tag.toLowerCase() === tagInLowerCase;
	}
	public get firstChild(): Node | undefined { return this.children[0]; }
	public get lastChild(): Node | undefined { return this.children.length ? this.children[this.children.length - 1] : void 0; }

	public findNodeBefore(offset: number): Node {
		let idx = findFirst(this.children, c => offset <= c.start) - 1;
		if (idx >= 0) {
			let child = this.children[idx];
			if (offset > child.start) {
				if (offset < child.end) {
					return child.findNodeBefore(offset);
				}
				let lastChild = child.lastChild;
				if (lastChild && lastChild.end === child.end) {
					return child.findNodeBefore(offset);
				}
				return child;
			}
		}
		return this;
	}

	public findNodeAt(offset: number): Node {
		let idx = findFirst(this.children, c => offset <= c.start) - 1;
		if (idx >= 0) {
			let child = this.children[idx];
			if (offset > child.start && offset <= child.end) {
				return child.findNodeAt(offset);
			}
		}
		return this;
	}
}

export interface QRunesDocument {
	roots: Node[];
	findNodeBefore(offset: number): Node;
	findNodeAt(offset: number): Node;
}

export function parse(text: string): QRunesDocument {
	let scanner = createScanner(text);

	let qrunesDocument = new Node(0, text.length, [], void 0);
	let curr = qrunesDocument;
	let token = scanner.scan();
	while (token !== TokenType.EOS) {
		switch (token) {
			case TokenType.StartTagOpen:
				let child = new Node(scanner.getTokenOffset(), text.length, [], curr);
				curr.children.push(child);
				curr = child;
				break;
			case TokenType.StartTag:
				curr.tag = scanner.getTokenText();
				break;
			case TokenType.StartTagClose:
				curr.end = scanner.getTokenEnd(); // might be later set to end tag position
				if (curr.tag) {
					curr.closed = true;
					curr = curr.parent;
				}
				break;					
		}
		token = scanner.scan();
	}
	while (curr.parent) {
		curr.end = text.length;
		curr.closed = false;
		curr = curr.parent;
	}
	return {
		roots: qrunesDocument.children,
		findNodeBefore: qrunesDocument.findNodeBefore.bind(qrunesDocument),
		findNodeAt: qrunesDocument.findNodeAt.bind(qrunesDocument)
	};

}