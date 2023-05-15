// Merged Sort 
//divide and conqure techniques

// Notes:-
// let x = [1,2,3,5,7,8,9]
// const middle = Math.floor(x.length/2) // 3

// console.log("middle number in the array ",Math.floor(x.length/2))

// console.log("left side of array" , x.slice(0,middle))//123
// console.log("right side of array" , x.slice(middle)) // 5,7,8,9


//------------------------------------------------------------------------------------------------------------------------------------------
// Ascending order
// divide :-

// let array = [100,7,8,15,4,90,3,47,2,48,9]
// console.log(mergedSort(array))

// function mergedSort(array){
//     if(array.length <=1)
// {
//     return array
// }
//  const middle = Math.floor(array.length/2);
// //  console.log("middle", middle) // 5
//  const left = array.slice(0,middle);
// //  console.log("left" , left) 
//  const right = array.slice(middle);
// //  console.log("right" , right)

//  return margedTopDown(mergedSort(left) , mergedSort(right))

// }

// // conqure:-

// function margedTopDown(left , right){
// // console.log("left side" , left)
// // console.log("right side" , right)
//     const array =[]
//     while(left.length && right.length){
//         if(left[0] < right[0]){
            
//             array.push(left.shift())
//         }
//         else{
//             array.push(right.shift())
//         }
//     }
//     // console.log("array is filling",array)
//     return ('this is the sorted array' , array.concat(left.slice()).concat(right.slice()));
// }

// -------------------------------// practice :- // dencending order-------------------------------------------------------------------------------

// let x = [1,5,7,6,4,9,3,55,99,901]
// console.log(diveded(x))

// function diveded(array){
//     if(array.length <= 1){
//         return array
//     }

//     let middle = Math.floor(array.length /2)
//     console.log(middle)

//     let left = array.slice(0 , middle)
//     console.log(left)

//     let right =  array.slice(middle)
//     console.log(right)

//     return sorted(diveded(left) , diveded(right))
// }

// function sorted(left , right){
//     const arr = []

//     while(left.length && right.length){
//         if(left[0] > right[0]){
//             arr.push(left.shift())
//         }
//         else{
//             arr.push(right.shift())
//         }
//     }
//     return (arr.concat(left.slice()).concat(right.slice()))

// }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// data :- 2/22
// sorting 2 array 
// we are giving two seprate array 
// we want to sorted it in one // this is not a merget sort function 
// merging 

// function mergedSotedArray(arr1, arr2) {

//     let i = 0;
//     let j = 0;
//     let result = [];

//     while (i < arr1.length || j < arr2.length) {

//         if (i < arr1.length && j < arr2.length) {
//             // both i and j valid position 
//             if (arr1[i] >= arr2[j]) {
//                 result.push(arr1[i]);
//                 i++
//             }
//             else {
                
//                 result.push(arr2[j]);
//                 j++
//             }
//         }
//         else if(i < n) {
//             // only i is valid position
//                 result.push(arr1[i]);
//                 i++
//             }
//             else if (j < arr2.length) {
//                 // only j is in valid position 
//                 result.push(arr2[j]);
//                 j++
//             }
//     }
    
//     return result;
// }


// let arr1 = [5,8,12,19,26,34,89]
// let arr2 = [-1,6,9,32,78]

// console.log(mergedSotedArray(arr1,arr2))

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//merged k sorted array to get a bigger sorted array 

// Time complexity = N * K
// N = Number of total elements
// K = number of smaller

// sorted :-

// let arrs = [                // k - pointers
//     [1,4,7,9],               // 0
//     [-3,2,21,30,40,42],      // 0
//     [4,42,67,90],            // 0
//     [12,13,23,85]            // 0
// ]

// /**
//  * @param {array} arrs
//  */

// // sorting

// function mergeKsortArray(arrs){
//     let k = arrs.length;

//     let sorted = []

//     let pointers = []; // will managed k pointers each for a row

//     for(let i = 0 ;i<k ;i++){
//         pointers.push(0);
//     }

// //loop each time to find the smallest element that is not selected

// let elementAvailable = true // updateon each iteration

// while(elementAvailable){

//     //figure out the row which was the element

//     let selectedRow = null;
//     let smallest = Infinity

//     for(let i =0;i<k ;i++){
//         let pointer = pointers[i]

//         if(pointer < arrs[i].length){ // checking whether the  i-th pointer is valid or not
//             let value = arrs[i][pointer];
    
//             if(value < smallest){
//                 smallest = value;
//                 selectedRow = i;
//             }
//         }
//     }

//     //pick the element from the selected row if the row is selected 
//     //and update the pointer for the row

//     if(selectedRow == null){
//         elementAvailable = false;

//     }
//     else{
//         let position = pointers[selectedRow];
//         let value = arrs[selectedRow][position];

//         sorted.push(value);

//         pointers[selectedRow]++;
//     }

// }
// return sorted;
// }
// const sorted = mergeKsortArray(arrs);

// console.log(sorted)






// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// comparsion function 
// some extra notes :-


    // figure out which one should come first
    // whether a should come first
    // or b should come first

    // if we want a to comefirst in the resulting array , then retrun negative
    // if we want b to come first in the resulting array  then retrun positive

    // if we want a and b to have same relative order , then retrun 0
 
//     function compared(a,b){
//     if(a<=b){
//         return -100
//     }
//     else{
//         return +100;
//     }
// }

// function dencendingComapred(a,b){
//     if(a>=b){
//         return -100;

//     }
//     else{
//         return +100
//     }

// }





