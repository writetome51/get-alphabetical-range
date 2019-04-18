"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var alphabet = require('alphabet');
var error_if_not_integer_1 = require("error-if-not-integer");
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
    var alphabetCopy = __getLowercaseOrUppercaseAlphabet();
    var _a = __chooseAlphabetOrder_and_returnStartingEndingIndexes(), startingIndex = _a[0], endingIndex = _a[1];
    for (var range = []; startingIndex <= endingIndex; startingIndex += increment) {
        range.push(alphabetCopy[startingIndex]);
    }
    return range;
    function __validateArguments() {
        // @ts-ignore
        if (not_1.not(alphabet.includes(startingLetter)) || not_1.not(alphabet.includes(endingLetter))) {
            throw new Error('Either the starting letter or ending letter was not a valid alphabetical character');
        }
        error_if_not_integer_1.errorIfNotInteger(increment);
        if (increment < 1)
            throw new Error('The increment parameter cannot be less than 1');
    }
    function __getLowercaseOrUppercaseAlphabet() {
        var lowerOrUpper = 'lower';
        if (alphabet.lower.includes(startingLetter))
            endingLetter = endingLetter.toLowerCase();
        else {
            endingLetter = endingLetter.toUpperCase();
            lowerOrUpper = 'upper';
        }
        return array_get_copy_1.getCopy(alphabet[lowerOrUpper]);
    }
    function __chooseAlphabetOrder_and_returnStartingEndingIndexes() {
        var startingIndex = alphabetToIndexMap_1.__alphabetToIndexMap[startingLetter.toLowerCase()];
        var endingIndex = alphabetToIndexMap_1.__alphabetToIndexMap[endingLetter.toLowerCase()];
        if (endingIndex < startingIndex)
            __reverseAlphabet_and_indexes();
        return [startingIndex, endingIndex];
        function __reverseAlphabet_and_indexes() {
            alphabetCopy.reverse();
            startingIndex = get_index_for_reversed_array_1.getIndexForReversedArray(startingIndex, alphabetCopy.length);
            endingIndex = get_index_for_reversed_array_1.getIndexForReversedArray(endingIndex, alphabetCopy.length);
        }
    }
}
exports.getAlphabeticalRange = getAlphabeticalRange;
