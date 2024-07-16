// some common algorithm challenges in JS

// 1) to check if 2 strings are anagrams (both strings have same characters but may be arranged in different way)
function isAnagram(str1, str2) {
    // if lengths of both strings arent equal they arent anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // compare alphabetically sorted strings, if true then anagram if false then no
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2) to find the kth largest element in an array
function findKthLargest(nums, k) {
    // sort array
    nums.sort()
    
    // to return the kth element we subtract array length from k
    return nums[nums.length - k];
}

let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
let kthLargest = findKthLargest(nums, k);
console.log(`The ${k}th largest element in the array is:`, kthLargest); // The 2nd largest element in the array is: 5
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3) to count occurence of each character in a string
function countCharOccur(str) {
    const charCount = {}; // initialize empty object to store char count as key-value pairs

    for (let char of str) { // iterate through string and increment count of corresponding char to 1 of not present or +1 if already occured before
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

let inpStr = "hello";
let occurrences = countCharOccur(inpStr);
console.log(occurrences); // { h:1, e:1, l:2, o:1}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4) two sum: accepts an array of numbers and target sum as input and returns 2 indices of the numbers that add up to targe value as an array of indices
function twoSum(arr, target) {
  let map = {}; // to keep track of value's indices

  for(let i = 0; i < arr.length; i++) {
    
   let currValue = arr[i]; // 2
   
   if(map[target - currValue] !== undefined) // 9-2 = 7 i.e undefined
   {
    return [map[target - currValue], i];
   }
   
   map[currValue] = i; // map[2]=0
   
  }
  return [];
}

let arr = [  2 ,7 , 11, 15 ];
let indices = twoSum(arr , 9);
console.log(indices); // [0,1]
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5) to title case a sentence
function titleCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(titleCase("the quick brown fox")); // "The Quick Brown Fox"
