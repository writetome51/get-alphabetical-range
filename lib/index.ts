import { getFirstIndexOf } from '@writetome51/array-get-indexes';


export function getAlphabeticalsAscending(startingLetter, endingLetter, increment = 1): string[] {
	let alphabeticals = [];
	for (
		let index = getFirstIndexOf(startingLetter, alphabet),
			lastIndex = getFirstIndexOf(endingLetter, alphabet);
		index <= lastIndex;
		index += increment
	) {
		alphabeticals.push(alphabet[index]);
	}
	return alphabeticals;
}


export function getAlphabeticalsDescending(startingLetter, endingLetter, increment = 1): string[] {
	let alphabeticals = [];
	for (
		let index = getFirstIndexOf(startingLetter, alphabet),
			lastIndex = getFirstIndexOf(endingLetter, alphabet);
		index >= lastIndex;
		index -= increment
	) {
		alphabeticals.push(alphabet[index]);
	}
	return alphabeticals;
}


const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
	"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
