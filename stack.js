//class = Stack
class Stack{
    constructor() { //empty array 
        this.items = []
    }
    push(element) { //how to add elements
        this.items.push(element)
    }
    pop() { //how to remove elemnts
        return this.items.pop()
    }
    size() { 
        return this.items.length
    }
}
const stack1 = new Stack() //new instance of stack class
stack1.push('Iron') 
stack1.push('Diamonds')
stack1.pop()
console.log(stack1)
stack1.push('Gold')
console.log(stack1)
console.log(stack1.size())