// quick sort implementation
function quickSort(arr) {
  if (arr.length <= 1) { // array is sorted by default if it has 1 or 0 elements
    return arr;
  }

  let pivot = arr[0]; // assign first element as pivot
  let leftArr = []; // subarray to store elements less than pivot element
  let rightArr = []; // subarray to store elements greater than pivot element

  for (let i = 1; i < arr.length; i++) { // iterate through array comparing pivot with array elements and push to corresponding subarray
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  
  return quickSort(leftArr).concat(pivot, quickSort(rightArr)); // return final sorted and concatenated array
}


let arr = [64, 25, 12, 22, 11];
let sortedArr = quickSort(arr);
console.log("Quick Sort:", sortedArr); // Quick Sort: [11, 12, 22, 25, 64]
// time complexity: O(n log(n))
