import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { getCopy } from '@writetome51/array-get-copy';
import { not } from '@writetome51/not';

// Returns array of letters in ascending or descending order, depending on what
// startingLetter and endingLetter are, and which comes first in the alphabet.

export function getAlphabeticalRange(startingLetter, endingLetter, increment = 1): string[] {
	__validateArguments();
	let range = [];
	let alphabetCopy = getCopy(alphabet);

	if (endingLetter < startingLetter) alphabetCopy.reverse();

	let index = getFirstIndexOf(startingLetter, alphabetCopy);
	let lastIndex = getFirstIndexOf(endingLetter, alphabetCopy);

	while (index <= lastIndex) {
		range.push(alphabetCopy[index]);
		index += increment;
	}
	return range;


	function __validateArguments(){
		startingLetter = startingLetter.toLowerCase();
		endingLetter = endingLetter.toLowerCase();

		if (not(alphabet.includes(startingLetter)) || not(alphabet.includes(endingLetter))) {
			throw new Error(
				'Either the starting letter or ending letter was not a valid alphabetical character');
		}
	}

}


export let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
	"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
