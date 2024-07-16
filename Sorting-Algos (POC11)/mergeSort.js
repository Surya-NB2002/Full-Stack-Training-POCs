// merge sort implementation
function mergeSort(arr) {

  if (arr.length <= 1) return arr
  
  let mid = Math.floor(arr.length / 2) // to divide array into half based on mid index

  // function recursively called to divide array further into subarrays till array length reaches 1 or less
  let left = mergeSort(arr.slice(0, mid)) // left subarray
  let right = mergeSort(arr.slice(mid)) // right subarray
  
  return merge(left, right) // function call to merge the divided subarrays into one sorted array
}

function merge(left, right) {
  
  let sortedArr = [] // to hold sorted array
  
  while (left.length && right.length) { // compare first element of left and right subarrays till length reaches 0
    if (left[0] < right[0]) { // push smaller first element value of either left/right to sorted array and update left/right array via shift operator
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  
  return [...sortedArr, ...left, ...right] // return final sorted array by concatenating left and right subarrays
}

let arr = [8,20,-2,4,-6]
console.log("Merge Sort: ",mergeSort(arr)) // Merge Sort: [ -6, -2, 4, 8, 20 ]
// time complexity: O(n log(n))
