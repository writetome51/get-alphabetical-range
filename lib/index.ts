import { alphabet, alphabetToIndexMap } from './privy/alphabet';
import { getCopy } from '@writetome51/array-get-copy';
import { getIndexForReversedArray } from '@writetome51/get-index-for-reversed-array';
import { not } from '@writetome51/not';


// Returns array of letters in ascending or descending order, depending on what
// startingLetter and endingLetter are, and which comes first in the alphabet.

export function getAlphabeticalRange(startingLetter, endingLetter, increment = 1): string[] {

	__validateArguments();
	let startingIndex = alphabetToIndexMap[startingLetter];

	let alphabetCopy = getCopy(alphabet); // in case its order must be reversed.
	if (endingLetter < startingLetter) reverseAlphabet_and_startingIndex();

	let range = [];
	while (startingIndex < alphabetCopy.length) {
		range.push(alphabetCopy[startingIndex]);

		if (alphabetCopy[startingIndex] === endingLetter) break;
		startingIndex += increment;
	}
	return range;


	function __validateArguments() {
		startingLetter = startingLetter.toLowerCase();
		endingLetter = endingLetter.toLowerCase();

		// @ts-ignore
		if (not(alphabet.includes(startingLetter)) || not(alphabet.includes(endingLetter))) {
			throw new Error(
				'Either the starting letter or ending letter was not a valid alphabetical character');
		}
	}


	function reverseAlphabet_and_startingIndex() {
		alphabetCopy.reverse();
		startingIndex = getIndexForReversedArray(startingIndex, alphabetCopy.length);
	}


}
