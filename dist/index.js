"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_copy_1 = require("@writetome51/array-get-copy");
var not_1 = require("@writetome51/not");
// Returns array of letters in ascending or descending order, depending on what
// startingLetter and endingLetter are, and which comes first in the alphabet.
function getAlphabeticalRange(startingLetter, endingLetter, increment) {
    if (increment === void 0) { increment = 1; }
    __validateArguments();
    var alphabetCopy = array_get_copy_1.getCopy(exports.alphabet);
    if (endingLetter < startingLetter)
        alphabetCopy.reverse();
    var index = alphabetCopy.indexOf(startingLetter);
    var lastIndex = alphabetCopy.indexOf(endingLetter);
    var range = [];
    while (index <= lastIndex) {
        range.push(alphabetCopy[index]);
        index += increment;
    }
    return range;
    function __validateArguments() {
        startingLetter = startingLetter.toLowerCase();
        endingLetter = endingLetter.toLowerCase();
        if (not_1.not(exports.alphabet.includes(startingLetter)) || not_1.not(exports.alphabet.includes(endingLetter))) {
            throw new Error('Either the starting letter or ending letter was not a valid alphabetical character');
        }
    }
}
exports.getAlphabeticalRange = getAlphabeticalRange;
exports.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
