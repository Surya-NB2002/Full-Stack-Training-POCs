// Stack implementation
// 1) using in-built array methods
class Stack {
    constructor() {
        this.items = []; // stack array
    }

    // to add element to end of stack array
    push(element) {
        this.items.push(element);
    }

    // to remove last element from stack array
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // to return element at top of stack array
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // to check if stack array is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // to return size of stack array
    size() {
        return this.items.length;
    }

    // to print stack array elements
    print() {
        console.log(this.items.join(" "));
    }
}


let stack = new Stack(); // create stack object
stack.push(10); // push 3 elements
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30 is at top of stack here

console.log(stack.pop());  // 30
console.log(stack.pop());  // 20

console.log(stack.peek()); // top of stack updated to 10

stack.print(); // 10

console.log(stack.isEmpty()); // false

console.log(stack.pop());  // 10
console.log(stack.pop());  // Stack is empty

console.log(stack.isEmpty()); // true

//-------------------------------------------------------------------------------------------------------------------------
//2)  without using in-built array methods
class Stack {
    constructor(size) {
        this.items = new Array(size); // stack array with specified size
        this.top = -1; // top of stack pointer
        this.maxSize = size; // stack array size
    }

    push(element) {
        if (this.top === this.maxSize - 1) {
            console.log("Stack overflow");
            return;
        }
        this.top++;
        this.items[this.top] = element;
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return "Stack is empty";
        }
        const element = this.items[this.top];
        this.top--;
        return element;
    }

    peek() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return "Stack is empty";
        }
        return this.items[this.top];
    }

    size() {
        return this.top + 1;
    }

    print() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }
        let result = "";
        for (let i = 0; i <= this.top; i++) {
            result += this.items[i] + " ";
        }
        console.log(result.trim());
    }
}

let stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());

console.log(stack.pop());  
console.log(stack.pop());  

console.log(stack.peek()); 

stack.print();

console.log(stack.size()); 

console.log(stack.pop());  
console.log(stack.pop());  

stack.print(); 
//-------------------------------------------------------------------------------------------------------------
//Example application - to reverse string using stack

function revStr(str) { // eg: revStr("hello")
  
    let stack = str.split(''); // ['h','e','l','l','o']

    let reversed = []; // to store reverse characters of string

    
    while (stack.length > 0) {
        reversed.push(stack.pop()); // ['o','l','l','e','h']
    }

    return reversed.join(''); // "olleh"
}

let inpStr = "hello";
let rev = revStr(inpStr);
console.log(rev); // "olleh"
