// quick sort :
/**
 * Time complexity :
 * 1. worst case - O(n*2) -> n2
 * it will only occurs when you have already sorted array 
 * 
 * 2. Average case - O(nlogn)
 * 
 * it is used when Average case
 * and Memory should be down!
 */
//=====================================================================================================================================================
// quick sort:-

/**
 * 
 * @param {array} array 
 * @returns 
 */
 
// type - 1

function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var unsorted = [4,55,96,7,12,22,3,46,29,15]
  var sorted = quicksort(unsorted);
  
  console.log('Sorted array', sorted);

  