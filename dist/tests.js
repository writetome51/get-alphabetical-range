"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var res = index_1.getAlphabeticalRange('a', 'f');
console.log(res);
// --> ["a", "b", "c", "d", "e", "f"]
res = index_1.getAlphabeticalRange('f', 'a');
console.log(res);
// --> [ 'f', 'e', 'd', 'c', 'b', 'a' ]
res = index_1.getAlphabeticalRange('a', 'o', 2);
console.log(res);
// --> [ 'a', 'c', 'e', 'g', 'i', 'k', 'm', 'o' ]
res = index_1.getAlphabeticalRange('o', 'a', 2);
console.log(res);
// --> [ 'o', 'm', 'k', 'i', 'g', 'e', 'c', 'a' ]
res = index_1.getAlphabeticalRange('z', 'a', 2);
console.log(res);
res = index_1.getAlphabeticalRange('y', 'a', 3);
console.log(res);
res = index_1.getAlphabeticalRange('a', 'z', 3);
console.log(res);
res = index_1.getAlphabeticalRange('l', 'z', 3);
console.log(res);
