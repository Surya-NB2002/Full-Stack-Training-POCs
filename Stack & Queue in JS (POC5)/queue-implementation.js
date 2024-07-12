// Queue implementation
// 1) using in-built array methods
class Queue {
    constructor() {
        this.items = []; // queue array
    }

    // to insert element at queue's rear
    enqueue(element) {
        this.items.push(element); 
    }

    // to remove element from queue's front
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; 
        }
        return this.items.shift(); 
    }

    // to fetch queue's front element
    front() {
        if (this.isEmpty()) {
            return "No elements in Queue"; 
        }
        return this.items[0];
    }

    // to check if queue array is empty
    isEmpty() {
        return this.items.length === 0; /
    }

    // to return size of queue array
    size() {
        return this.items.length; 
    }

    // to print queue array elements
    printQueue() {
        console.log(this.items.join(" "));
    }
}

let queue = new Queue(); // create queue object
queue.enqueue(10); // enqueue 3 elements
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); // 10 20 30

console.log(queue.dequeue()); // 10
console.log(queue.front()); // front element is 20 here

console.log(queue.printQueue()); // 20 30
console.log(queue.size()); // 2

console.log(queue.isEmpty()); // false

//-------------------------------------------------------------------------------------------------------------------------
//2)  without using in-built array methods
class Queue {
    constructor() {
        this.items = []; 
        this.frontIndex = 0; // queue's front pointer
        this.rearIndex = -1; // queue's rear pointer
        this.size = 0; // queue array size
    }

    enqueue(element) {
        this.rearIndex++; 
        this.items[this.rearIndex] = element; 
        this.size++; 
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"; 
        }
        let dequeuedElement = this.items[this.frontIndex]; 
        this.frontIndex++; 
        this.size--; 
        return dequeuedElement; 
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue"; 
        }
        return this.items[this.frontIndex]; 
    }

    isEmpty() {
        return this.size === 0; 
    }

    getSize() {
        return this.size; 
    }

    printQueue() {
        let str = "";
        for (let i = this.frontIndex; i <= this.rearIndex; i++) {
            str += this.items[i] + " ";
        }
        return str.trim();
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue()); 

console.log(queue.dequeue()); 
console.log(queue.front()); 

console.log(queue.printQueue()); 
console.log(queue.getSize()); 

console.log(queue.isEmpty()); 
//--------------------------------------------------------------------------------------------------------------------------
// Example application - to find first unique character in a string
function firstUniqueChar(str) { // eg: "hello"
    let queue = []; // to store char in order they appear
    let charCount = {}; // object to store char frequency

    for (let char of str) { 
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1; // {'h': 1}
            queue.push(char);  // ['h']
        }
    }

    //  ['h','e','l','o']
    while (queue.length > 0) {
        let firstChar = queue[0];
        if (charCount[firstChar] === 1) {
            return firstChar; // h
        } else {
            queue.shift(); // ['e','l','o'] & so on....
        }
    }

    return null; 
}

console.log(firstUniqueChar("hello")); // h
console.log(firstUniqueChar("aabbcc")); // null as no unique character
