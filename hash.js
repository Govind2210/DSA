let fs = require("fs");
const { resourceLimits } = require("worker_threads");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

/**
 * 
 */


//counting star

let testcase = parseInt(readLine())
// console.log(testcase)
for(i = 0 ; i< testcase ; i++){
    let size = parseInt(readLine())
    // console.log(size)
    let givenStr = readLine()
    // console.log(givenStr)

    let myMap = new Map();
    let result = 0; //to count , number of pervious occ . of given chars
    for(let j = 0 ; j < size ; j++){
        if(myMap.has(givenStr[j])){
            result += myMap.get(givenStr[j]);
            myMap.set(givenStr[j], 1 + myMap.get(givenStr[j]));
        }
        else{
            // result +=0;
            myMap.set(givenStr[j] , 1 + 0);
        }
    }
    console.log(result)
}

// sports star------------------------------------------------------

// let n = parseInt(readLine())
// // console.log(n)

// let sportsLikes = new Map(); // cricket-->2 , football-> 3
// // console.log(sportsLikes)

// let alreadyMetPeople = new Map(); // abhinash -> True , abir -> True
// // console.log(alreadyMetPeople)

// for(i=0 ; i< n ; i++){
//     let [name,game ]= readLine().trim().split(" ") //sperate name n game 
//     if(!alreadyMetPeople.has(name)){
//         alreadyMetPeople.set(name,true);
//         if(sportsLikes.has(game)){
//             sportsLikes.set(game , 1 + sportsLikes.get(game))
//         }else{
//             sportsLikes.set(game,1)
//         }
//     }
// }
// let maxLikes = Number.NEGATIVE_INFINITY;
// for(let games of sportsLikes.keys()){
//     maxLikes = Math.max(maxLikes , sportsLikes.get(games));
// }
// let mostLikedGames = [];
// for(let game of sportsLikes.keys()){
//     if(sportsLikes.get(game) === maxLikes){
//         mostLikedGames.push(game);
//     }
// }
// mostLikedGames.sort();
// console.log(mostLikedGames[0]);

// if(sportsLikes.has("football")){
//     console.log(sportsLikes.get("football"));
// }else{
//     console.log(0)
// }

//code words---------------------------------------------------------------------

// let testcase = parseInt(readLine());
// // console.log(testcase);
// let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// for(let i =0 ;i< testcase ; i++){
//     let words = readLine().trim().split(" ")
//     // console.log(words)
//     let resultSet = new Set(); // to remove duplicate automatically!

//     for(let j = 0 ; j < words.length ; j++){ // for each word we are using this
//         let morseCode =""
//         let currWord = words[j]
//         for(let k = 0 ; k < currWord.length ; k++){ //for each character in the word
//             morseCode += (code[currWord.charCodeAt(k) - 97]); //morese code for currWord

//         }
//         resultSet.add(morseCode);
//     }
//     console.log(resultSet.size)
// }

// socks question

// let n = parseInt(readLine())
// console.log(n)
// let arr = readLine().split(' ').map(Number)
// console.log(arr)
// let sockspair = new Map();
// console.log(sockspair)
// //10 20 20 10 10 30 50 10 20
// for(let i=0;i<arr.length;i++){
// 	if(sockspair.has(arr[i])){
// 	sockspair.set(arr[i],sockspair.get(arr[i])+1);//20(1)+1=2, +1 =3/ 10(1)+1= 2 ,+1= 3,+1= 4
// 	console.log(sockspair)
// 	}
// 	else{
// 		  sockspair.set(arr[i],1);
// 		  console.log(sockspair) // 10->1 //20->1 //30->1 //50->1
// 	}
// }
// let pairs = 0
// for(let [keys,values] of sockspair){
// 	pairs += parseInt(values/2)
// }
// console.log(pairs);

// let n = parseInt(readLine());
// console.log(n)

// let arr = readLine().split(' ').map(Number) // 10, 20, 20, 10, 10, 30, 50, 10, 20
// console.log(arr)

// let sockpair = new Map() // store // // 10 :1 // 20:1


// for(i =0 ; i< arr.length ; i++){ // 10:1 +1 + 1 = 3 //20 :1 +1 =4 // 30:1 //50:1
//     if(sockpair.has(arr[i])){  // 30!
//         sockpair.set(arr[i] , sockpair.get(arr[i])+1) // 10 :4 ; 20 : 3 ; 30 :1 ; 50: 1
//     }
//     else{
//         sockpair.set(arr[i] , 1); // 10 :1 // 20:1 // 30:1
//     }
// }
//console.log(sockpair) //{ 10 => 4, 20 => 3, 30 => 1, 50 => 1 }

// let unpair = 0
// for (let [key , value] of sockpair){
//     unpair += parseInt(value/2) // 4 + 3 + 1 + 1 = 
// }
// console.log(unpair);

// console.log(sockpair.keys())
// console.log(sockpair.values())

// for(let keys of sockpair.keys()){
//     console.log(keys)
// }

// for(let values of sockpair.values()){
//     console.log(values)
// }

//-----------------------------------------------------sequence-------------------------------------------------------------------

// let n = parseInt(readLine())
// let arr = readLine().split(" ").map(Number);

// let d = new Map();
// let maxVal = Math.max(...arr);
// for(let i = 1 ; i<=maxVal ; i++){
//     d.set(i , 0)
// }

// for(let i = 0 ; i < arr.length ; i++){
//     d.set(arr[i] ,  1 + d.get(arr[i]));
// }

// let scenario = 1;
//     for(let i = 2 ; i <= maxVal ; i++){
//         if(d.get(i) > d.get(i-1)){
//             scenario = 2;
//             break;
//         }
//     }


// if(scenario ===1){
//     let result = [];
//     for(let i =0 ; i< d.get(1);i++){
//         result.push([]);
//     }

//     for(let i = 1 ;i <= maxVal ; i++){
//         for(let j = 0 ;j < d.get(i) ; j++){
//             result[j].push(i)
//         }
//     }

//     console.log(result.length);
//     for(let i = result.length-1 ; i>= 0 ; i--){
//         console.log(...result[i])
//     }
// }else{
//     let count =0;
//     let lastMax =0;
//     for(let i =maxVal ; i>= 1 ;i--){
//         if(d.get(i)>lastMax){
//             lastMax = d.get(i);
//         }else{
//             count += (lastMax - d.get(i))
//         }
//     }
//     console.log(count);
// }