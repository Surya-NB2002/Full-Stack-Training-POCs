// most used array methods
let array = [1, 2, 3, 4, 5];
console.log("Original array:", array);

// push() - to add new element at end
array.push(6);
console.log("After push(6):", array); // [1,2,3,4,5,6]

// pop() - to remove last element 
array.pop();
console.log("After pop():", array); // [1,2,3,4,5]

// shift() - to remove first element
array.shift();
console.log("After shift():", array); // [2,3,4,5]

// unshift() - to add element at front
array.unshift(0);
console.log("After unshift(0):", array); // [0,2,3,4,5]

// concat() - to combine two or more arrays
let array2 = [6, 7, 8];
let concatenatedArray = array.concat(array2);
console.log("Concatenated array:", concatenatedArray); // [0,2,3,4,5,6,7,8]

// toString() - to convert array to string 
let arrayString = array.toString();
console.log("Array as a string:", arrayString); // 0,2,3,4,5

// slice() - to create new array containing sliced/cut portion of original array
let slicedArray = array.slice(1, 3); // (startIdx, endIdx) here endIdx is exclusive
console.log("Sliced array (from index 1 to 3):", slicedArray); // [2,3]

// splice() - to modify array by removing, replacing or adding elements if needed
array.splice(2, 0, 9); // (startIdx, count of elements to be deleted, new elements...) here insert 9 at index 2
console.log("After splice(2, 0, 9):", array); // [0,2,9,3,4,5]
array.splice(2, 1); // remove 1 element from index 2
console.log("After splice(2, 1):", array); // [0,2,3,4,5]

// indexOf() - to find index of any element
let indexOfFour = array.indexOf(4);
console.log("Index of 4:", indexOfFour); // 3

//--------------------------------------------------------------------------------------------------------------------
// Example program- to remove duplicate elements from array
function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

let inputArray = [1, 2, 2, 3, 4, 4, 5];
let result = removeDuplicates(inputArray);
console.log(result); // Output: [1, 2, 3, 4, 5]

