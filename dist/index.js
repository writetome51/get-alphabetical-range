"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var alphabet = require('alphabet');
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var alphabetToIndexMap_1 = require("./privy/alphabetToIndexMap");
var array_get_copy_1 = require("@writetome51/array-get-copy");
var get_index_for_reversed_array_1 = require("@writetome51/get-index-for-reversed-array");
var not_1 = require("@writetome51/not");
// Returns array of letters in ascending or descending order, depending on what
// `startingLetter` and `endingLetter` are, and which comes first in the alphabet.
// Whether the returned array is upper or lowercase depends on the case of
// `startingLetter`.
function getAlphabeticalRange(startingLetter, endingLetter, increment) {
    if (increment === void 0) { increment = 1; }
    __validateArguments();
    var alphbt; // to be used as a copy of alphabet.
    __chooseLowercaseOrUppercaseAlphabet();
    var _a = __chooseAlphabetOrder_and_returnStartingEndingIndexes(), startingIndex = _a[0], endingIndex = _a[1];
    for (var range = []; startingIndex <= endingIndex; startingIndex += increment) {
        range.push(alphbt[startingIndex]);
    }
    return range;
    function __validateArguments() {
        // @ts-ignore
        if (not_1.not(alphabet.includes(startingLetter)) || not_1.not(alphabet.includes(endingLetter))) {
            throw new Error('Either the starting letter or ending letter was not a valid alphabetical character');
        }
        errorIfNotInteger_1.errorIfNotInteger(increment);
    }
    function __chooseLowercaseOrUppercaseAlphabet() {
        var lowerOrUpper = 'lower';
        if (alphabet.lower.includes(startingLetter))
            endingLetter = endingLetter.toLowerCase();
        else {
            endingLetter = endingLetter.toUpperCase();
            lowerOrUpper = 'upper';
        }
        alphbt = array_get_copy_1.getCopy(alphabet[lowerOrUpper]); // in case its order must be reversed.
    }
    function __chooseAlphabetOrder_and_returnStartingEndingIndexes() {
        var startingIndex = alphabetToIndexMap_1.__alphabetToIndexMap[startingLetter.toLowerCase()];
        var endingIndex = alphabetToIndexMap_1.__alphabetToIndexMap[endingLetter.toLowerCase()];
        if (endingLetter < startingLetter)
            __reverseAlphabet_and_indexes();
        return [startingIndex, endingIndex];
        function __reverseAlphabet_and_indexes() {
            alphbt.reverse();
            startingIndex = get_index_for_reversed_array_1.getIndexForReversedArray(startingIndex, alphbt.length);
            endingIndex = get_index_for_reversed_array_1.getIndexForReversedArray(endingIndex, alphbt.length);
        }
    }
}
exports.getAlphabeticalRange = getAlphabeticalRange;
