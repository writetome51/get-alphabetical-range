// @ts-ignore
let alphabet = require('alphabet');
import { errorIfNotInteger } from 'error-if-not-integer';
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
	let alphabetCopy = __getLowercaseOrUppercaseAlphabet();
	
	let [startingIndex, endingIndex] = __chooseAlphabetOrder_and_returnStartingEndingIndexes();

	for (var range = []; startingIndex <= endingIndex; startingIndex += increment) {
		range.push(alphabetCopy[startingIndex]);
	}
	return range;


	function __validateArguments() {
		// @ts-ignore
		if (not(alphabet.includes(startingLetter)) || not(alphabet.includes(endingLetter))) {
			throw new Error(
				'Either the starting letter or ending letter was not a valid alphabetical character');
		}
		errorIfNotInteger(increment);
		if (increment < 1) throw new Error('The increment parameter cannot be less than 1');
	}


	function __getLowercaseOrUppercaseAlphabet() {
		let lowerOrUpper = 'lower';
		if (alphabet.lower.includes(startingLetter)) endingLetter = endingLetter.toLowerCase();
		else {
			endingLetter = endingLetter.toUpperCase();
			lowerOrUpper = 'upper';
		}
		return getCopy(alphabet[lowerOrUpper]);
	}


	function __chooseAlphabetOrder_and_returnStartingEndingIndexes() {
		let startingIndex = __alphabetToIndexMap[startingLetter.toLowerCase()];
		let endingIndex = __alphabetToIndexMap[endingLetter.toLowerCase()];
		if (endingIndex < startingIndex) __reverseAlphabet_and_indexes();
		return [startingIndex, endingIndex];


		function __reverseAlphabet_and_indexes() {
			alphabetCopy.reverse();
			startingIndex = getIndexForReversedArray(startingIndex, alphabetCopy.length);
			endingIndex = getIndexForReversedArray(endingIndex, alphabetCopy.length);
		}
	}


}
