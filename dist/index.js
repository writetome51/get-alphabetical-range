"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabet_1 = require("./privy/alphabet");
var array_get_copy_1 = require("@writetome51/array-get-copy");
var get_index_for_reversed_array_1 = require("@writetome51/get-index-for-reversed-array");
var not_1 = require("@writetome51/not");
// Returns array of letters in ascending or descending order, depending on what
// startingLetter and endingLetter are, and which comes first in the alphabet.
function getAlphabeticalRange(startingLetter, endingLetter, increment) {
    if (increment === void 0) { increment = 1; }
    __validateArguments();
    var startingIndex = alphabet_1.alphabetToIndexMap[startingLetter];
    var alphabetCopy = array_get_copy_1.getCopy(alphabet_1.alphabet); // in case its order must be reversed.
    if (endingLetter < startingLetter)
        reverseAlphabet_and_startingIndex();
    var range = [];
    while (startingIndex < alphabetCopy.length) {
        range.push(alphabetCopy[startingIndex]);
        if (alphabetCopy[startingIndex] === endingLetter)
            break;
        startingIndex += increment;
    }
    return range;
    function __validateArguments() {
        startingLetter = startingLetter.toLowerCase();
        endingLetter = endingLetter.toLowerCase();
        // @ts-ignore
        if (not_1.not(alphabet_1.alphabet.includes(startingLetter)) || not_1.not(alphabet_1.alphabet.includes(endingLetter))) {
            throw new Error('Either the starting letter or ending letter was not a valid alphabetical character');
        }
    }
    function reverseAlphabet_and_startingIndex() {
        alphabetCopy.reverse();
        startingIndex = get_index_for_reversed_array_1.getIndexForReversedArray(startingIndex, alphabetCopy.length);
    }
}
exports.getAlphabeticalRange = getAlphabeticalRange;
