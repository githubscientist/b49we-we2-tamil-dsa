// // counting way
// var isGreater = function(totalCandies, candies, i){
//     let count = 0;
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies >= candies[index]){
//                 count++;
//             }
//         }
//     }
    
//     if(count == candies.length-1){
//         return true;
//     } else {
//         return false;
//     }
// }

// // counting way
// var isGreater = function(totalCandies, candies, i){
//     let count = 0;
//     for(let index=0; index<candies.length; index++) 
//         if(index != i) 
//             if(totalCandies >= candies[index]) count++;
//     return count == candies.length-1;
// }

// // assumption way
// var isGreater = function(totalCandies, candies, i){
//     let assumption = true;

//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]) assumption = false;
//         }
//     }

//     return assumption;
// }

// // assumption way
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++){
//         if(index != i){
//             if(totalCandies < candies[index]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// // assumption way
// var isGreater = function(totalCandies, candies, i){
//     for(let index=0; index<candies.length; index++) if(totalCandies < candies[index]) return false;
//     return true;
// }

// assumption way
// time complexity: O(N)
// var isGreater = function(totalCandies, candies, i){
//     for(let candy of candies) if(totalCandies < candy) return false;
//     return true;
// }


// /**
//  * @param {number[]} candies
//  * @param {number} extraCandies
//  * @return {boolean[]}
//  */
// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     // create an array <- result to store the boolean result
//     let result = [];

//     // iterate or traverse or loop through the candies array <- i
//     for(let i=0; i<candies.length; i++){
//         // for every candies[i], find the total number of candies
//         // totalCandies = candies[i] + extraCandies
//         let totalCandies = candies[i] + extraCandies;

//         // check if the totalCandies is >= all the other kids candies
//         if(isGreater(totalCandies, candies, i)){
//             // if true => push true to the result array
//             result.push(true);
//         } else {
//             // else => push false to the result array
//             result.push(false);
//         }
//     }
    
//     // return the result array
//     return result;
// };


// // time complexity: O(N^2)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         let greatestCandy = Math.max(...candies);
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         if(totalCandies >= greatestCandy){
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         let totalCandies = candies[i] + extraCandies;
//         result.push(totalCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i=0; i<candies.length; i++){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let i in candies){
//         result.push(candies[i] + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     for(let candy of candies){
//         result.push(candy + extraCandies >= greatestCandy);
//     }
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     candies.forEach(candy => {
//         result.push(candy + extraCandies >= greatestCandy);
//     })
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     let greatestCandy = Math.max(...candies);
//     result = candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
//     return result;
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => {
//         return candy + extraCandies >= greatestCandy;
//     });
// };

// // time complexity: O(N)
// var kidsWithCandies = function(candies, extraCandies) {
//     let greatestCandy = Math.max(...candies);
//     return candies.map(candy => candy + extraCandies >= greatestCandy);
// };

// time complexity: O(N^2)
var kidsWithCandies = function(candies, extraCandies) {
    return candies.map(candy => candy + extraCandies >= Math.max(...candies));
};