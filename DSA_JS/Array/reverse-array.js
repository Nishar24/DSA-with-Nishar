let arr = [10, 20, 30, 40];
function reverse(arr){
    let result = [];

    for(let i = arr.length-1; i >= 0; i --){
        result.push(arr[i])
    }
    return result;
}

console.log(reverse(arr));

// function reverse(arr){
//     let left = 0;
//     let right = arr.length - 1;

//     while(left < right){
//         [arr[left], arr[right]] = [arr[right], arr[left]];

//         left ++;
//         right --;
//     }
//     return arr;
// }

// console.log(reverse(arr))