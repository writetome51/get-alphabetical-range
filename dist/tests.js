"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var res = index_1.getAlphabeticalRange('a', 'f');
if (arrays_match_1.arraysMatch(res, ["a", "b", "c", "d", "e", "f"]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
res = index_1.getAlphabeticalRange('f', 'a');
if (arrays_match_1.arraysMatch(res, ['f', 'e', 'd', 'c', 'b', 'a']))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
res = index_1.getAlphabeticalRange('a', 'o', 2);
if (arrays_match_1.arraysMatch(res, ['a', 'c', 'e', 'g', 'i', 'k', 'm', 'o']))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
res = index_1.getAlphabeticalRange('o', 'a', 2);
if (arrays_match_1.arraysMatch(res, ['o', 'm', 'k', 'i', 'g', 'e', 'c', 'a']))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
res = index_1.getAlphabeticalRange('z', 'a', 2);
if (arrays_match_1.arraysMatch(res, ['z', 'x', 'v', 't', 'r', 'p', 'n', 'l', 'j', 'h', 'f', 'd', 'b']))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
res = index_1.getAlphabeticalRange('y', 'a', 3);
if (arrays_match_1.arraysMatch(res, ['y', 'v', 's', 'p', 'm', 'j', 'g', 'd', 'a']))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
res = index_1.getAlphabeticalRange('a', 'z', 3);
if (arrays_match_1.arraysMatch(res, ['a', 'd', 'g', 'j', 'm', 'p', 's', 'v', 'y']))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
res = index_1.getAlphabeticalRange('l', 'Z', 3);
if (arrays_match_1.arraysMatch(res, ['l', 'o', 'r', 'u', 'x']))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
res = index_1.getAlphabeticalRange('J', 'z');
if (arrays_match_1.arraysMatch(res, ['J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']))
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
res = index_1.getAlphabeticalRange('Z', 'j');
if (arrays_match_1.arraysMatch(res, ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R',
    'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J']))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
res = index_1.getAlphabeticalRange('Z', 'j', 3);
console.log(res);
if (arrays_match_1.arraysMatch(res, ['Z', 'W', 'T', 'Q', 'N', 'K']))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
