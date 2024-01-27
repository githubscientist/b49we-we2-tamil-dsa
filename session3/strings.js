/*
    Strings

    - Strings are used to store text or stream of characters
    - characters could be letters, numbers, symbols, etc.
    - characters from the string can be accessed using index
    - strings are immutable (cannot be changed)
    - methods of strings:
        - length: returns the length of the string (property)
        - charAt: returns the character at the specified index
        - concat: concatenates two or more strings
        - includes: checks if the string contains the specified string/characters
        - indexOf: returns the index of the specified string/characters
        - toLowerCase: converts the string to lowercase
        - toUpperCase: converts the string to uppercase
        - trim: removes whitespace from both ends of the string
        - split: splits the string into an array of substrings
*/

// let word = 'apple';
// let word = `apple is 
// a fruit`;
// let word = new String('apple');

// console.log(word);

// let word = 'apple';

// // console.log(word[word.length - 1]);

// let index = 4;
// let char = 'm';

// // word[index] = char; # not working because the strings are immutables

// word = word.slice(0, index) + char + word.slice(index + 1,);
// console.log(word);

// let word = 'apple';

// // console.log(word.toUpperCase())

// console.log(word.indexOf('p', 2));