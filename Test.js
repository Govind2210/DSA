let arr = [7,8,9,11,22,66,47,2]

function MergedSort(arr){
    
    // divide

    if(arr.length <= 1){
        return arr
    }

    let middle = Math.floor(arr.length /2)
    let left = arr.slice(0 , middle)
    let right = arr.slice(middle)

    return MergedTop(MergedSort(left) , MergedSort(right))
}
// conqure     
function MergedTop(left , right){

    let arr = []

    while(left.length && right.length){

        if(left[0] < right[0]){
            arr.push(left.shift())
        }
        else{
            arr.push(right.shift())
        }
    }
    return (arr.concat(left.slice()).concat(right.slice()))

}

console.log(MergedSort(arr))