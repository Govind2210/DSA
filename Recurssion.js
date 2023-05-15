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
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let A = parseInr(readLine())

// arr = []
// for(i = 0 ; i<A ;i++){
//     arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// [0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1]

// let x = parseInt(readLine())
// // console.log(x);

// arr = []
// for(i=0 ; i<x ; i++){
//   arr[i] = parseInt(readLine())
// }
// // console.log(arr)

// minNumber = arr[0]
// for(i = 0 ; i<arr.length ; i++){
//   if(arr[i] < minNumber){
//     minNumber = arr[i]
//   }
// }
// // console.log(minNumber)
// sum=0;
// while(minNumber){
//    sum=sum+minNumber%10
//    minNumber= Math.floor(minNumber/10)
// }

// if(minNumber%2 == 0){
//   console.log(0)
// }
// else{
//   console.log(1)
// }

//-------------------------------------------------------------------------------------------------------------------

// function numberOfWays(element , key , numberOfElements ,currentindex , currentSum , taken){
// // base case
// //1. check if current sum exceed key
// //2. or we reached invalid index
// if(currentSum > key || currentindex > numberOfElements){
//   return 0 
// }

// if(currentindex === numberOfElements){
//   if(currentSum === key){
//     return 1;
//   }
//   else{
//     return 0;
//   }
// }

// let ways = 0 
// // checl if current element has not been added to the sum (taken ==0)
// if(taken === 0){
//   ways += numberOfWays(element , key , numberOfElements  ,currentindex +1 , currentSum  ,0)
// }
//   ways += numberOfWays(element , key , numberOfElements ,currentindex + 1 , currentSum + element[currentindex] , 0 )

// if(currentSum + element[currentindex] < key){
//   ways += numberOfWays(element , key , numberOfElements ,currentindex, currentSum + element[currentindex] , 1 )

// }
// return ways;
// }

// let input = readLine().trim().split(" ")
// // console.log(input)
 
// let numberOfElements = parseInt(input[0])
// // console.log(numberOfElements);

// let key = parseInt(input[1])
// // console.log(key)

// let element = readLine().trim().split(" ")
// // console.log(element)

// for(let i =0 ; i <  numberOfElements ; i++){
//   element[i] = parseInt(element[i])
// }

// element.sort((a,b)=> {return a-b})


// let currentSum = 0;
// let currentindex = 0;
// let taken = 0; // this will donated that current sum is taken or not;

// console.log(numberOfWays(element , key , numberOfElements  ,currentindex , currentSum, taken))


// ===========================================================================================================================

// balance parenthisis

// function getAllbalanceparenthisis(n){
//   let ans = [];
//   solution(n,n," ")
//   function solution(opening , closing , str){
//     if(opening === 0 && closing ===0){
//       ans.push(str);
//     }
//     if(closing < opening){
//       return;
//     }
//     if(opening != 0){
//       solution(opening-1 , closing , str+"(")
//     }
//     if(closing !=0){
//       solution(opening,closing-1,str+")")
//     }
//   }
//   return ans
// }


































