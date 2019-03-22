"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
function getAlphabeticalsAscending(startingLetter, endingLetter, increment) {
    if (increment === void 0) { increment = 1; }
    var alphabeticals = [];
    for (var index = array_get_indexes_1.getFirstIndexOf(startingLetter, alphabet), lastIndex = array_get_indexes_1.getFirstIndexOf(endingLetter, alphabet); index <= lastIndex; index += increment) {
        alphabeticals.push(alphabet[index]);
    }
    return alphabeticals;
}
exports.getAlphabeticalsAscending = getAlphabeticalsAscending;
function getAlphabeticalsDescending(startingLetter, endingLetter, increment) {
    if (increment === void 0) { increment = 1; }
    var alphabeticals = [];
    for (var index = array_get_indexes_1.getFirstIndexOf(startingLetter, alphabet), lastIndex = array_get_indexes_1.getFirstIndexOf(endingLetter, alphabet); index >= lastIndex; index -= increment) {
        alphabeticals.push(alphabet[index]);
    }
    return alphabeticals;
}
exports.getAlphabeticalsDescending = getAlphabeticalsDescending;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
