import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { getCopy } from '@writetome51/array-get-copy';

// Returns array of letters in ascending or descending order, depending on what
// startingLetter and endingLetter are, and which comes first in the alphabet.

export function getAlphabeticalRange(startingLetter, endingLetter, increment = 1): string[] {
	let alphabeticals = [];
	let alphabetCopy = getCopy(alphabet);

	if (!alphabetCopy.includes(startingLetter) || !alphabetCopy.includes(endingLetter)) {
		throw new Error(
			'Either the starting letter or ending letter was not a valid alphabetical character');
	}
	if (endingLetter < startingLetter) alphabetCopy.reverse();

	let index = getFirstIndexOf(startingLetter, alphabetCopy);
	let lastIndex = getFirstIndexOf(endingLetter, alphabetCopy);

	while (index <= lastIndex) {
		alphabeticals.push(alphabetCopy[index]);
		index += increment;
	}
	return alphabeticals;
}


export let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
	"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
