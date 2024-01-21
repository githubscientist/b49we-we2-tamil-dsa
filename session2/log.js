/*

N = 10; j = 2, 4, 8 => 3 times
N = 29; j = 2, 4, 8, 16 => 4 times
N = 30; j = 2, 4, 8, 16 => 4 times
N = 31; j = 2, 4, 8, 16 => 4 times
N = 40; j = 2, 4, 8, 16, 32 => 5 times

*/

console.log(`for N = 10, number of executions = ${Math.floor(Math.log2(10))}`);
console.log(`for N = 29, number of executions = ${Math.floor(Math.log2(29))}`);
console.log(`for N = 30, number of executions = ${Math.floor(Math.log2(30))}`);
console.log(`for N = 31, number of executions = ${Math.floor(Math.log2(31))}`);
console.log(`for N = 40, number of executions = ${Math.floor(Math.log2(40))}`);