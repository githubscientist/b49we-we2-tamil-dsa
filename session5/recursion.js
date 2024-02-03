/*
    recursion: a function that calls itself!
*/

// named functions
// function sayHello() {
//     console.log('hello world!');
// }

// nameless functions or anonymous functions
// let sayHello = function () {
//     console.log('hello world!');
// }

// arrow functions
// let sayHello = () => {
//     console.log('hello world!');
// }

// IIFE: Immediately Invoked Function Expression
// (() => {
//     console.log('hello world!');
// })();

// function call
// sayHello();

// function sayHello() {
//     console.log('hello world!');
//     sayHello();
// }

// sayHello();

// iterative way: print the hello message N times

// function sayHello(N) {
//     for (let i = 1; i <= N; i++){
//         console.log('hello');
//     }
// }

// sayHello(5);

// // recursive way
// function sayHello(N) {

//     if (N === 0) return;

//     console.log('hello');
//     sayHello(N-1);
// }

// sayHello(3);

/*
    Recursion Tree:

    sayHello(5)
        - console.log('hello')
        - sayHello(4)
            - console.log('hello')
            - sayHello(3)
                - console.log('hello')
                - sayHello(2)
                    - console.log('hello')
                    - sayHello(1)
                        - console.log('hello')
                        - sayHello(0)
                            - return
                            
                
*/

/*
  Exercise: Write a iterative and recursive functions to print the first N natural numbers in reverse order.
  
  Input: 5

  Output:

  5
  4
  3
  2
  1

  Input: 4

  Output:

    4
    3
    2
    1

*/

// function print(N) {
//     for (let i = N; i >= 1; i--){
//         console.log(i);
//     }
// }

// function print(N) {
//     for (; N >= 1; N--){
//         console.log(N);
//     }
// }

// print(5);

// function print(N) {
//     if (N == 0) return;

//     console.log(N);
//     print(N - 1);
// }

// print(5);

/*
    print(5)
        - N = 5; 5 == 0; false
        - console.log(5)
        - print(4)
            - N = 4; 4 == 0; false
            - console.log(4)
            - print(3)
                - N = 3; 3 == 0; false
                - console.log(3)
                - print(2)
                    - N = 2; 2 == 0; false
                    - console.log(2)
                    - print(1)
                        - N = 1; 1 == 0; false
                        - console.log(1)
                        - print(0)
                            - N = 0; 0 == 0; true
                            - return
    
    
    print(5)
*/

// function print(N) {
//     if (N == 0) return;
//     print(N - 1);
//     console.log(N);
// }

// print(5);

/*
    print(5)
        - N = 5; 5 == 0; false
        - print(4)
            - N = 4; 4 == 0; false
            - print(3)
                - N = 3; 3 == 0; false
                - print(2)
                    - N = 2; 2 == 0; false
                    - print(1)
                        - N = 1; 1 == 0; false
                        - print(0)
                            - N = 0; 0 == 0; true
                            - return
                        - console.log(1)
                    - console.log(2)
                - console.log(3)
            - console.log(4)
        - console.log(5)
*/

/*
    Problem: Find the sum of first N natural numbers.

    Input: 5

    Output: 15

    Explanation: 1 + 2 + 3 + 4 + 5 = 15

    Input: 4

    Output: 10

    Explanation: 1 + 2 + 3 + 4 = 10
*/

// Method 1

// let sum = 0;

// function S(N) {
//     if (N == 0) return sum;

//     sum += N;

//     return S(N - 1);
// }

// console.log(S(5)); // output: 15

/*
    S(5)
        - sum = 5
        - return S(4)
                  |_ sum = 9
                   - return S(3)
                             |_ sum = 12
                              - return S(2)
                                        |_ sum = 14
                                         - return S(1)
                                                    |_ sum = 15
                                                     - return S(0)
    
    
    S(5)
*/

// Method 2

// function S(N, sum = 0) {
//     if (N == 0) return sum;

//     sum += N;

//     return S(N - 1, sum);
// }

// console.log(S(5)); // output: 15

// function S(N, sum = 0) {
//     if (N == 0) return sum;

//     return S(N - 1, sum + N);
// }

// console.log(S(5)); // output: 15

// Method 3: Recurrence Relation

/*
    S(N) = ?

    For N = 1, S(1) = 1
    For N = 2, S(2) = 1 + 2 = 3
    For N = 3, S(3) = 1 + 2 + 3 = 6
    For N = 4, S(4) = 1 + 2 + 3 + 4 = 10
    For N = 5, S(5) = 1 + 2 + 3 + 4 + 5 = 15

    --------------------------------------------

    Backward Substitution: 

    For N = 1, S(1) = 1

    For N = 2, S(2) = S(1) + 2 = 3
    For N = 3, S(3) = S(2) + 3 = 6
    For N = 4, S(4) = S(3) + 4 = 10
    For N = 5, S(5) = S(4) + 5 = 15

    --------------------------------------------

    Recurrence Relation: General Form

    For N=1, S(N) = 1
    For N>1, S(N) = S(N-1) + N
*/

// function S(N) {
//     // For N=1, S(N) = 1
//     if (N == 1) return 1;

//     // For N>1, S(N) = S(N-1) + N
//     return S(N - 1) + N;
// }

// console.log(S(10));

/*
    Problem: Find the recurrence relation for the factorial of a number. Implement the recursive function to find the factorial of a number.

    Input: 5
    Output: 120

    Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120

    Input: 4
    Output: 24

    Explanation: 4! = 4 * 3 * 2 * 1 = 24
*/


// function F(N) {
//     if (N===0 || N === 1) return 1;
//     return N * F(N - 1);
// }

// console.log(F(4));

/*
    Problem: Find the sum of digits of a number.

    Input: 123
    Output: 6

    Explanation: 1 + 2 + 3 = 6

    Input: 456
    Output: 15

    Explanation: 4 + 5 + 6 = 15
*/

// function S(N, sum = 0) {
//     if (N === 0) return sum;
//     return S(Math.floor(N / 10), sum + N % 10);
// }

// console.log(S(125));

/*
    Problem: Find the Nth Fibonacci number.

    Input: 5
    Output: 3

    Explanation: 0, 1, 1, 2, 3, 5, ...

    Input: 6
    Output: 5

    Explanation: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
*/

function F(N) {
    if (N == 1) return 0;
    if (N == 2) return 1;

    return F(N - 1) + F(N - 2);
}

console.log(F(10));

/*
    F(1) = 0
    F(2) = 1

    F(3) = F(2) + F(1)
    F(4) = F(3) + F(2)

    F(N) = F(N-1) + F(N-2)
*/