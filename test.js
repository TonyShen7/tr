let stack = [];
let maxSize = 5; 

function push(element) {
    if (stack.length < maxSize) {
        stack.push(element); 
    } else {
        console.log("Full Stack");
    }
}

function pop() {
    return stack.length > 0 ? stack.pop() : "Empty stack"; 
}

function peek() {
    return stack.length > 0 ? stack[stack.length - 1] : "Empty stack"; 
}

function size() {
    return stack.length; 
}

function isEmpty() {
    return stack.length == 0; 
}

function isFull() {
    return stack.length == maxSize; 
}

push(10);
push(20);
push(30);
push(40);
push(50);

console.log(size());    // 5
console.log(peek());    // 50
console.log(pop());     // 50
console.log(isEmpty()); // false
console.log(isFull());  // true
