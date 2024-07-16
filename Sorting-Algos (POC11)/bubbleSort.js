// bubble sort implementation
function bubbleSort(arr) {
    let swapped; // to check if swapping takes place in one pass of array
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) { // compare and swap adjacent elements if successive element is greater than current element
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; // if swapped set variable to true
            }
        }
    } while (swapped); // do array pass atleast once irrespective of swapped value using do-while loop. if swapped = false next time loop terminates and array is sorted.
}

let arr = [64, 25, 12, 22, 11];
bubbleSort(arr);
console.log("Bubble Sort: ", arr); // Bubble Sort: [ 11, 12, 22, 25, 64 ]
// Time Complexity: O(n^2)
