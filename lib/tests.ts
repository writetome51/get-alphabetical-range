import { getAlphabeticalsAscending, getAlphabeticalsDescending } from './index';


let res = getAlphabeticalsAscending('a', 'f');
console.log(res);
// --> ["a", "b", "c", "d", "e", "f"]

res = getAlphabeticalsDescending('f', 'a');
console.log(res);
// --> [ 'f', 'e', 'd', 'c', 'b', 'a' ]

res = getAlphabeticalsAscending('a', 'o', 2);
console.log(res);
// --> [ 'a', 'c', 'e', 'g', 'i', 'k', 'm', 'o' ]

res = getAlphabeticalsDescending('o', 'a', 2);
console.log(res);
// --> [ 'o', 'm', 'k', 'i', 'g', 'e', 'c', 'a' ]

res = getAlphabeticalsAscending('a', 'y', 3);
console.log(res);
// --> [ 'a', 'd', 'g', 'j', 'm', 'p', 's', 'v', 'y' ]

res = getAlphabeticalsDescending('y', 'a', 3);
console.log(res);
// --> [ 'y', 'v', 's', 'p', 'm', 'j', 'g', 'd', 'a' ]
