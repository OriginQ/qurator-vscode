/**
 * This ts file provides the details of qrunes language tags
 */

import * as nls from 'vscode-nls';
let localize = nls.loadMessageBundle();

export interface IQRunesTagProvider {
	getId(): string;
	isApplicable(languageId: string) : boolean;
	collectTags(collector: (tag: string, label: string) => void): void;
}

export interface ITagSet {
	[tag: string]: QRunesTagSpecification;
}

export class QRunesTagSpecification {
	constructor(public label: string) { }
}

export const QRUNES_TAGS: ITagSet = {
	settings: new QRunesTagSpecification(
		localize('tags.settings', 'The settings element represents the configurations of QRunes\(Quantum Programming Language\).')),
	qcodes: new QRunesTagSpecification(
		localize('tags.qcodes', 'The qcodes element represents the quantum code for QRunes\(Quantum Programming Language\).')),
	script: new QRunesTagSpecification(
		localize('tags.script', 'The script element represents the classic programming languanges like Python, C++, etc.'))
}

export function getQRunesTagProvider(): IQRunesTagProvider {
	return {
		getId: () => 'qrunes',
		isApplicable: () => true,
		collectTags: (collector: (tag: string, label: string) => void) => collectTagsDefault(collector, QRUNES_TAGS)
	};
}

function collectTagsDefault(collector: (tag: string, label: string) => void, tagSet: ITagSet): void {
	for (var tag in tagSet) {
		collector(tag, tagSet[tag].label);
	}
}
