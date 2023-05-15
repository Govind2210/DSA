// insorting  function

// arr = [7,9,4,2,6,8,3,0]
// console.log(insorting(arr))

//  type 1
// Ascending Order

function insorting(arr) {
  for (i = 1; i < arr.length; i++) { // 7 2 4 1 3
    
    let j = i - 1; //7
    let key = arr[i]; //2
    while (j >= 0 && key < arr[j]) { // 7 >=0 && 2 < 7 T
      arr[j + 1] = arr[j]; // 7
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insorting([7, 2, 4, 1, 3]));

// ans - [ 0, 2, 3, 4, 6, 7, 8, 9]
/*
[ 7, 2, 4, 1, 3]
  0  1  2  3  4 

i   key    j = i-1   j>=0    key < arr[j]   array
1    2       0      0>=0 T     2 < 7 t      [ 7,| 7, 4, 1, 3 ]
1    2       -1     0>=0 T                  [ 2, 7,| 4, 1, 3]

2    4      1       1>=0 T      4 < 7 t      [2, 7, 7, 1,3]
2    4      0       0>=0 t      4 < 2 F      [ 2, 4, 7|, 1, 3]

3    1      2       2>=0 t      1< 7 t     [ 2, 4, 7, 7, 3]
            1       1>=0 t      1< 4 t     [ 2, 4, 4, 7, 3]
            0       0>=0 t      1 < 2 t    [ 2, 2, 4, 7, 3]
            -1      0>=0 t                 [ 1, 2, 4, 7|, 3]

4    3      3       3>= 0 t     3 < 7 t    [ 1, 2, 4, 7, 7]
            2       2>=0 t      3 < 4 t    [ 1, 2, 4, 4, 7]
            1       1 >=0 t     3 < 2 f    [ 1, 2, 3, 4, 7]
*/

// type 2

// Descending Order [7,9,4,2,6,8,3,0]

// let arr = [7,9,4,2,6,8,3,0]
// console.log(insorting(arr))

// function insorting(arr){
//     for(i = 1 ; i < arr.length ; i++){ //7 | 9,4,2,6,8,3,0 -> start from here
//         let j = i-1; //7 //
//         let key = arr[i]; //9
//         while(j>=0 && key > arr[j]){ // 7>0 t, 9>7f ,
//     arr[j+1] = arr[j];
//     j--
//     }
//     arr[j+1] = key;
//     }
//     return arr;
// }

// ans :- 9,8,7,6,4,3,2,0

// type 3------------------------------------------------------------------------------------------------------------

//input: [ 2, 4, -1, 8, 0, 3]
// index [ 1 , 2, 3, 4, 5, 6]

//even:[2, -1, 0]  odd:[4, 8, 3]

//ouptup:[-1, 8, 0, 4, 2, 3]
//even:[-1,0,2]ace  odd:[8,4,3]dec

//[alternate even and odd]
// ans = [-1,8,0,4,2,3]

// function evenOddInsertionSort(arr) {
//   //input: [ 2, 4, -1, 8, 0, 3]
//   //even
//   for (
//     let i = 2;
//     i < arr.length;
//     i = i + 2 //-1
//   ) {
//     let j = i - 2; // 2 //0
//     let key = arr[i]; //-1
//     while (j >= 0 && key < arr[j]) {
//       //2>=0  t && -1< 2 t  //2>=0 t &&  0 f
//       arr[j + 2] = arr[j]; //[ 2, 4, 2, 8, 0, 3]
//       j = j - 2; //
//     }
//     arr[j + 2] = key; // [ -1, 4, 2, 8, 0, 3]
//   }
//   //odd
//   for (
//     let i = 3;
//     i < arr.length;
//     i = i + 2 //input: [ 2, 4, -1, 8 , 0, 3]
//   ) {
//     let j = i - 2; // 1 = 4 // -1
//     let key = arr[i]; // 8
//     while (j >= 0 && key > arr[j]) {
//       //  4>=0 t &&  8 > 4 t
//       arr[j + 2] = arr[j]; // [ 2, 4, -1, 4 , 0, 3] // [ 2, 8, -1, 4 , 0, 3]
//       j -= 2; //0
//     }
//     arr[j + 2] = key;
//   }
//   return arr;
// }
// let arr = [2, 4, -1, 8, 0, 3];
// console.log(evenOddInsertionSort(arr)); // -1, 8, 0, 4, 2, 3

// /*
// type - 3

// [ 2, 4, 3, 8, 0, -1, 9, 5] --> [9, 4, -1, 8, 0, 3, 2, 5]
//   0  1  2  3  4   5  6  7
//         for[2 8 9]---->[9 8 2]--->dec
//                        [4,0,5]
//                        [-1,2] --> asc
// */

// function insertionSort(arr)
// {

//     for(let i=3;i<arr.length;i=i+3)
//     {
//         let j=i-3;
//         let key=arr[i];
//         while(j>=0 && key>arr[j]){
//             arr[j+3]=arr[j];
//             j=j-3;
//         }
//         arr[j+3]=key;
//     }
//     //for[3 -1]--->[-1 3]---->ace
//     for(let i=5;i<arr.length;i=i+3)
//     {
//         let j=i-3;
//         let key=arr[i];
//         while(j>=0 && key<arr[j]){
//             arr[j+3]=arr[j];
//             j=j-3;
//         }
//         arr[j+3]=key;
//     }
//     return arr
// }
// console.log("[2,4,3,8,0,-1,9,5]--->"+insertionSort([2,4,3,8,0,-1,9,5]))//[2,4,3,8,0,-1,9,5]---->[9, 4, -1, 8, 0, 3, 2, 5]

// let input_string = readLine()
// console.log(stringInsertionSort(input_string))

// function stringInsertionSort(str){
//   str = str.split('')
//   for(i = 0 ; i<str.length ; i++){
//     let j = i-1
//     key = str[i]
//     while(i>=0 && key < str[j]){
//       str[j+1] = str[j]
//       j--
//     }
//     str[j+1] = key;
//   }
//   let output = ""
//   for(i = 0 ; i  < str.length;i++){
//     output += str[i]
//   }
//   return output;
// }
