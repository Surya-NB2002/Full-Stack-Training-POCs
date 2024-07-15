// recursion examples in js

// 1) factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive case eg: 5 * factorial(4) & so on... till it reaches 1
}
// once base case is reached in recursive function, the base answer is back-substituted to upper levels/function calls to get final answer.
console.log(factorial(5)); // 120 i.e. 5*4*3*2*1
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2) fibonacci sequence
function fibonacci(n) {
  if (n <= 1) {
    return n; // base case
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case eg: fibonacci(5-1) + fibonacci(5-2) .....
}

console.log(fibonacci(5)); // 5 i.e. 0,1,1,2,3,5
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3) greatest common divisor(GCD)
function gcd(a, b) {
  if (b === 0) {
    return a; // base case
  }
  return gcd(b, a % b); // recursive case eg: gcd(18,48%18) ....
}

console.log(gcd(48, 18)); // 6 i.e. 6 is highest no. that divides 48 and 18 completely with 0 remainder
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// recursion example applications

// 1) to reverse string
function revStr(str) {
  if (str === "") {
    return ""; // base case
  }
  return revStr(str.substr(1)) + str.charAt(0); // recursive case eg: revStr("ello") + "h"
}

console.log(revStr("hello")); // "olleh"
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2) tower of hanoi
function towerOfHanoi(n, source, auxiliary, target) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${target}`);
    return;
  }

  // move n-1 disks from source to auxiliary keeping target on hold to get them out of the way
  towerOfHanoi(n - 1, source, target, auxiliary);

  // move nth disk from source to target
  console.log(`Move disk ${n} from ${source} to ${target}`);

  // move n-1 disks from auxiliary to target
  towerOfHanoi(n - 1, auxiliary, source, target);
}

// for 3 disks
towerOfHanoi(3, 'A', 'B', 'C');

/* for 3 disks:
move topmost disk from A to C
move 2nd disk from A to B
move disk at C to B
move biggest disk from A to C
move top disk at B to A
move other disk at B to C
move smallest disk now at A to C
steps = 7
*/




