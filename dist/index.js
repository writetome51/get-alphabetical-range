"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_get_copy_1 = require("@writetome51/array-get-copy");
// Returns array of letters in ascending or descending order, depending on what
// startingLetter and endingLetter are, and which comes first in the alphabet.
function getAlphabeticalRange(startingLetter, endingLetter, increment) {
    if (increment === void 0) { increment = 1; }
    var alphabeticals = [];
    var alphabetCopy = array_get_copy_1.getCopy(exports.alphabet);
    if (!alphabetCopy.includes(startingLetter) || !alphabetCopy.includes(endingLetter)) {
        throw new Error('Either the starting letter or ending letter was not a valid alphabetical character');
    }
    if (endingLetter < startingLetter)
        alphabetCopy.reverse();
    var index = array_get_indexes_1.getFirstIndexOf(startingLetter, alphabetCopy);
    var lastIndex = array_get_indexes_1.getFirstIndexOf(endingLetter, alphabetCopy);
    while (index <= lastIndex) {
        alphabeticals.push(alphabetCopy[index]);
        index += increment;
    }
    return alphabeticals;
}
exports.getAlphabeticalRange = getAlphabeticalRange;
exports.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
