/*

Arrays

    - Arrays are used to store multiple values in a single variable
    - built-in data structures
    - can be used to store any type of data and stored continuously in memory
    - can be accessed using index
    - arrays are mutables
    - methods of array
        - push: add element at the end of the array
        - pop: remove element from the end of the array
        - shift: remove element from the beginning of the array
        - unshift: add element at the beginning of the array
        - splice: add or remove element from the array
        - slice: copy the array
        - indexOf: find the index of the element
        - includes: check if the element is present in the array
        - sort
        - map
        - reduce
        - filter
        - join: join the elements of the array into a string
*/

// let numbers = [1, 2, true, 6.543, "apple", [4, 5, 6], { coins: 100 }];

// console.log(numbers[1]);

// console.log(numbers[5][2]);

let numbers = [4, 1, 3, 2, 5];

// console.log(numbers.length);

numbers.push(7);

numbers.pop();

numbers.unshift(-1);

numbers.shift();

let index = 2;
let value = 75;

numbers.splice(index, 0, value);

index = 3;
numbers.splice(index, 1);

console.log(numbers);