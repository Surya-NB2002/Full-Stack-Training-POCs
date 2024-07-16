// selection sort implementation
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i; // set first element's index as index with smallest no. and loop
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) { // compare jth index value with minindex value 
                minIndex = j; // if small, update minindex to jth element's index
            }
        }
        if (minIndex !== i) { // do below actions if minindex gets updated
            let temp = arr[i]; // swap ith index element value with updated minindex element value & so on...
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Selection Sort: ", arr); // Selection Sort: [ 11, 12, 22, 25, 64 ]
// time complexity: O(n^2)

