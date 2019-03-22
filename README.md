# getAlphabeticalRange(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingLetter,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;endingLetter,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;increment? = 1<br>): string[] 

Returns array of letters in ascending or descending order, depending on what  
`startingLetter` and `endingLetter` are, and which comes first in the alphabet.


## Examples
```ts
getAlphabeticalRange('a', 'f');
    // --> ["a", "b", "c", "d", "e", "f"]
    
getAlphabeticalRange('f', 'a');
    // --> ["f", "e", "d", "c", "b", "a"]
```

## Installation
`npm i  @writetome51/get-alphabeticals-ascending-descending`

## Loading
```ts
// if using TypeScript:
import {getAlphabeticalsAscending, getAlphabeticalsDescending} 
    from '@writetome51/get-alphabeticals-ascending-descending';
// if using ES5 JavaScript:
var getAlphabeticalsAscending = 
    require('@writetome51/get-alphabeticals-ascending-descending').getAlphabeticalsAscending;
var getAlphabeticalsDescending = 
    require('@writetome51/get-alphabeticals-ascending-descending').getAlphabeticalsDescending;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
