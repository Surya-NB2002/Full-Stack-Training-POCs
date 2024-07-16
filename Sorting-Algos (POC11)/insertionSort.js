// selection sort implementation
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) { 
            arr[j + 1] = arr[j]; // to shift array elements
            j--;
        }
        arr[j + 1] = key; // insert element at appropriate place in array
    }
}

let arr = [64, 25, 12, 22, 11];
insertionSort(arr);
console.log("Insertion Sort: ", arr); // Insertion Sort: [ 11, 12, 22, 25, 64 ]
// time complexity: O(n^2)
