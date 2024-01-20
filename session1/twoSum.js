/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// // time complexity: O(N^2)
// var twoSum = function(nums, target) {
//     // generate all the possible pairs
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             // check if the pair sum is equal to the target
//             if(nums[i] + nums[j] == target){
//                 // return the indices of the pair as an array
//                 return [i, j];
//             }
//         }
//     }
// };

// // time complexity: O(N LogN)
// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         let diff = target - nums[i];

//         // check if the diff exists in the array
//         let index = nums.indexOf(diff, i+1);

//         if(index != -1) return [i, index];
//     }
// };


// time complexity: O(N)
var twoSum = function(nums, target) {
    
};

