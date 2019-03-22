"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var res = index_1.getAlphabeticalsAscending('a', 'f');
console.log(res);
// --> ["a", "b", "c", "d", "e", "f"]
res = index_1.getAlphabeticalsDescending('f', 'a');
console.log(res);
// --> [ 'f', 'e', 'd', 'c', 'b', 'a' ]
res = index_1.getAlphabeticalsAscending('a', 'o', 2);
console.log(res);
// --> [ 'a', 'c', 'e', 'g', 'i', 'k', 'm', 'o' ]
res = index_1.getAlphabeticalsDescending('o', 'a', 2);
console.log(res);
// --> [ 'o', 'm', 'k', 'i', 'g', 'e', 'c', 'a' ]
res = index_1.getAlphabeticalsAscending('a', 'y', 3);
console.log(res);
// --> [ 'a', 'd', 'g', 'j', 'm', 'p', 's', 'v', 'y' ]
res = index_1.getAlphabeticalsDescending('y', 'a', 3);
console.log(res);
// --> [ 'y', 'v', 's', 'p', 'm', 'j', 'g', 'd', 'a' ]
