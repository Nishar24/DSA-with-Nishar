// let arr = [10, 20, 30, 40];

// function countEven(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] %2 === 0){
//         count ++
//     }
//     }
//     return count;
// }

// console.log(countEven(arr));

let nums = [2,5,8,6]

function findMissingNumber(nums) {

    let n = nums.length;

    // expected sum.
    let expected = (n * (n + 1)) / 2;

    // actual sum
    let actual = 0;
    for (let i = 0; i < n; i++) {
        actual += nums[i];
    }

    return expected - actual;
}

console.log(findMissingNumber(nums));
