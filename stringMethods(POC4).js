// most used atring methods
let str = "  Hello, JavaScript!  ";
console.log("Original string:", str);

// length - returns string length
let length = str.length;
console.log("Length of the string:", length); //22

// indices - to access string's individual characters
let firstChar = str[0];
let lastChar = str[str.length - 1];
console.log("First character:", firstChar); // whitespace
console.log("Last character:", lastChar); // whitespace

// Template literals - to embed variables inside string
let name = "John";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log("Template literal example:", greeting); // Hello, John! Welcome to JavaScript.

// toUpperCase() - to convert string to UPPERCASE
let upperStr = str.toUpperCase();
console.log("Uppercase string:", upperStr); //  HELLO, JAVASCRIPT!

// toLowerCase() - to convert string to lowercase
let lowerStr = str.toLowerCase();
console.log("Lowercase string:", lowerStr); //  hello, javascript!

// trim() - to remove whitespaces from string's either ends
let trimmedStr = str.trim();
console.log("Trimmed string:", trimmedStr); // Hello, JavaScript! (no whitespaces on left & right side)

// slice() - to extract a portion of original string and return it
let slicedStr = str.slice(2, 7); // (startIdx, endIdx) endIdx is exclusive
console.log("Sliced string (from index 2 to 7):", slicedStr); // Hello

// concat() - to concatenate/combine 2 or more strings
let str2 = " Let's learn!";
let concatenatedStr = str.concat(str2);
console.log("Concatenated string:", concatenatedStr); // Hello, JavaScript!   Let's learn!

// replace() - to replace a substring with another substring
let replacedStr = str.replace("JavaScript", "World"); // (substr to be replaced, substr to be replaced with)
console.log("Replaced string:", replacedStr); // Hello, World! 

// charAt() - to fetch a character at specific index
let charAtIndex5 = str.charAt(5);
console.log("Character at index 5:", charAtIndex5); // l
