// @ts-ignore
let alphabet = require('alphabet');
import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { __alphabetToIndexMap } from './privy/alphabetToIndexMap';
import { getCopy } from '@writetome51/array-get-copy';
import { getIndexForReversedArray } from '@writetome51/get-index-for-reversed-array';
import { not } from '@writetome51/not';


// Returns array of letters in ascending or descending order, depending on what
// `startingLetter` and `endingLetter` are, and which comes first in the alphabet.
// Whether the returned array is upper or lowercase depends on the case of
// `startingLetter`.

export function getAlphabeticalRange(startingLetter, endingLetter, increment = 1): string[] {

	__validateArguments();
	let alphbt: string[]; // to be used as a copy of alphabet.
	__chooseLowercaseOrUppercaseAlphabet();

	let [startingIndex, endingIndex] = __chooseAlphabetOrder_and_returnStartingEndingIndexes();

	for (var range = []; startingIndex <= endingIndex; startingIndex += increment) {
		range.push(alphbt[startingIndex]);
	}
	return range;


	function __validateArguments() {
		// @ts-ignore
		if (not(alphabet.includes(startingLetter)) || not(alphabet.includes(endingLetter))) {
			throw new Error(
				'Either the starting letter or ending letter was not a valid alphabetical character');
		}
		errorIfNotInteger(increment);
	}


	function __chooseLowercaseOrUppercaseAlphabet() {
		let lowerOrUpper = 'lower';
		if (alphabet.lower.includes(startingLetter)) endingLetter = endingLetter.toLowerCase();
		else {
			endingLetter = endingLetter.toUpperCase();
			lowerOrUpper = 'upper';
		}
		alphbt = getCopy(alphabet[lowerOrUpper]); // in case its order must be reversed.
	}


	function __chooseAlphabetOrder_and_returnStartingEndingIndexes() {
		let startingIndex = __alphabetToIndexMap[startingLetter.toLowerCase()];
		let endingIndex = __alphabetToIndexMap[endingLetter.toLowerCase()];
		if (endingLetter < startingLetter) __reverseAlphabet_and_indexes();
		return [startingIndex, endingIndex];


		function __reverseAlphabet_and_indexes() {
			alphbt.reverse();
			startingIndex = getIndexForReversedArray(startingIndex, alphbt.length);
			endingIndex = getIndexForReversedArray(endingIndex, alphbt.length);
		}
	}


}
