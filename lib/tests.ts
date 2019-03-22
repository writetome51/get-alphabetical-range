import { getAlphabeticalRange } from './index';


let res = getAlphabeticalRange('a', 'f');
console.log(res);
// --> ["a", "b", "c", "d", "e", "f"]

res = getAlphabeticalRange('f', 'a');
console.log(res);
// --> [ 'f', 'e', 'd', 'c', 'b', 'a' ]

res = getAlphabeticalRange('a', 'o', 2);
console.log(res);
// --> [ 'a', 'c', 'e', 'g', 'i', 'k', 'm', 'o' ]

res = getAlphabeticalRange('o', 'a', 2);
console.log(res);
// --> [ 'o', 'm', 'k', 'i', 'g', 'e', 'c', 'a' ]

res = getAlphabeticalRange('z', 'a', 2);
console.log(res);

res = getAlphabeticalRange('y', 'a', 3);
console.log(res);

res = getAlphabeticalRange('a', 'z', 3);
console.log(res);


res = getAlphabeticalRange('l', 'z', 3);
console.log(res);

