let fs = require("fs");
const { format } = require("path");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

//rightToLeftDiagonal

// function rightToLeftDiagonal(){
//     let output = [];
//     let n = matrix.length-1
//     for(let i = 0 ; i <matrix.length ;i++){ // row 
//         for(j = 0 ; j <matrix[i].length ; j++){ // column
//             if(i + j == n){
//                 output.push(matrix[i][j])
//             }
//         }
//     }
//     return output
// }


// // Do not change anything below this line
// let m = parseInt(readLine());
// let matrix = [];
// for (let row = 0; row < m; row++) {
// let rowElements = readLine().split(" ");
// // console.log("rowElements" , rowElements)
// matrix.push(rowElements);
// }
// // console.log("matrix" , matrix)
// let result = rightToLeftDiagonal(matrix);
// for (element of result) {
// console.log(element);
// }

//------------------------------------------------------------------------------------------------------------------------------

// luck number
// nums = 2 2 3 4
// function findLuckyNumber(nums){
//     let count = 1; //2
//     let current = nums[0] // fixed --> 2

//     for(let i = 0 ; i<nums.length ; i++){
//         if(current == nums[i]){ //2 --> 2, count = 2 // 3 // 4
//             count++
//         }
//         else if(count == current){
//             console.log(current)
//         }else{
//             current = nums[i]
//                 console.log(1)
//         }
//         if(count == current) return count
//         return -1
//     }
// }
// // DO NOT change anything below this line
// let numElems = parseInt(readLine());
// let inputArr = [];
// for(let index=0;index<numElems;index++){
//   inputArr.push(parseInt(readLine()));
// }
// console.log(findLuckyNumber(inputArr));

//-----------------------------------------------------------------------------------------------------------------------------------------

// count occurance

// let queryInterger = parseInt(readLine())
// // console.log(queryInterger);
// let n = parseInt(readLine())
// let arr = []
// for(let i =0 ; i<n ; i++){
//   arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// count = 0
// for(let j = 0 ; j<arr.length ; j++){
//   if(queryInterger == arr[j]){
//     count++
//   }
// }
// console.log(count)

// alternate sort

// function evenOddInsertionSort(arr) //input: [ 2, 4, -1, 8, 0, 3]
// {   //even
//     for(let i=2;i<arr.length;i=i+2)  //-1
//     {
//         let j=i-2;   // 2 //0
//         let key=arr[i]; //-1  
//         while(j>=0 && key>arr[j]){   //2>=0  t && -1< 2 t  //2>=0 t &&  0 f
//             arr[j+2]=arr[j];  //[ 2, 4, 2, 8, 0, 3]
//             j=j-2;  // 
//         }
//         arr[j+2]=key; // [ -1, 4, 2, 8, 0, 3]
//     }
//     //odd
//     for(let i=3;i<arr.length;i=i+2)  //input: [ 2, 4, -1, 8 , 0, 3]
//     {
//         let j=i-2;  // 1 = 4 // -1
//         let key=arr[i]; // 8
//         while(j>=0 && key<arr[j]){  //  4>=0 t &&  8 > 4 t
//             arr[j+2]=arr[j]; // [ 2, 4, -1, 4 , 0, 3] // [ 2, 8, -1, 4 , 0, 3]
//             j-=2; //0
//         }
//         arr[j+2]=key;
//     }
//     return arr;
// }

// let t = parseInt(readLine())
// // console.log(t)

// for(let i = 0 ; i < t ; i++){
//   let arr = readLine().split(' ').map(Number)
//   console.log(evenOddInsertionSort(arr))
// }

// max by now

// let n = parseInt(readLine());
// // console.log(n)

// let arr = [] // 3 2 5 10 8
// for(let i = 0 ; i < n ;i++){
//   arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// let maxNum = arr[0] // 3
// for(let i = 0 ; i < arr.length ; i++){
//   if(maxNum < arr[i]){
//     maxNum = arr[i]
//   }
//   console.log(maxNum)
// }

// Mac Occurance

// let n = parseInt(readLine())
// // console.log(n)

// let arr = []
// for(let i = 0 ; i< n ; i++){
//   arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// console.log(maxCountoccurance(arr))

// function maxCountoccurance(arr){
// let count = 1;
// let maxOcc = []

//   if(arr.length == 0){
//   console.log(-1)
//   }

//     for(i = 1  ; i< arr.length ; i++){
//       if(arr[i] == arr[i-1]){
//         count++
//         maxOcc.push(arr[i])
//       }
//       else{
//         count = 1
//       }
      
//     }
//    let ans = [...new Set(maxOcc)]
//     for(let i = 0 ; i<ans.length ; i++){
//       console.log(ans[i])
//     }
 
// }

// sorted square

// 
// Growth

// let n = parseInt(readLine())
// // console.log(n)
// let sum = 0 
// let arr = []
// for(let i = 0 ; i < n ; i++){
//   arr[i] = parseInt(readLine())
  
// }
// // console.log(arr)

// for(let i = 0 ; i < arr.length ; i++){
//   sum = sum + arr[i]
// }

// let avg = sum / n

// if(avg < 100){
//   console.log("Not Excellent!")
// }
// else{
//   console.log("Excellent!!")
// }

// color sort

// let n = parseInt(readLine())
// // console.log(n)

// let arr = []
// for(i = 0 ; i < n ; i++){
//   arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// for(let i = 0 ; i < arr.length ; i++){
//   for(j = i + 1 ; j < arr.length ; j++){
//     if(arr[ i] > arr [j]){
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
//   console.log(arr[i])
// }

// Max_Triple_Product

// let n = parseInt(readLine())
// console.log(n)
// let arr = []
// for(let i = 0 ; i < n ; i++){
//   arr[i] = parseInt(readLine())
// }
// console.log(arr)

// function  tripleproduct(arr){
//   let len = arr.length

//   if(len <= 2){
//     return 0
//   }
//   else{
//     arr.sort((a,b)=>a-b)

//     return arr[n-1] * arr[n-2] * arr[n-3]
//   }
// }

// console.log(tripleproduct(arr))


