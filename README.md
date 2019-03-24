# getAlphabeticalRange(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingLetter,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endingLetter,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;increment? = 1<br>): string[] 

Returns array of English letters in ascending or descending order, depending on what  
`startingLetter` and `endingLetter` are, and which comes first in the alphabet.  
If `startingLetter` is uppercase, the returned letters will all be uppercase.


## Examples
```ts
getAlphabeticalRange('a', 'f');
    // --> ["a", "b", "c", "d", "e", "f"]
    
getAlphabeticalRange('f', 'a');
    // --> ["f", "e", "d", "c", "b", "a"]
    
getAlphabeticalRange('a', 'o', 2);
    // --> [ 'a', 'c', 'e', 'g', 'i', 'k', 'm', 'o' ]
    
getAlphabeticalRange('A', 'o', 2);
    // --> [ 'A', 'C', 'E', 'G', 'I', 'K', 'M', 'O' ]
    
getAlphabeticalRange('z', 'M', 3);
    // --> [ 'z', 'w', 't', 'q', 'n' ]
    
getAlphabeticalRange('M', 'z', 3);
    // --> [ 'M', 'P', 'S', 'V', 'Y' ]
```

## Installation
`npm i  @writetome51/get-alphabetical-range`

## Loading
```ts
// if using TypeScript:
import {getAlphabeticalRange} from '@writetome51/get-alphabetical-range';
// if using ES5 JavaScript:
var getAlphabeticalRange = 
    require('@writetome51/get-alphabetical-range').getAlphabeticalRange;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
