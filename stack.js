class Stack{
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    size() {
        return this.items.length
    }
}

const stack1 = new Stack()
stack1.push('Minecraft') 
stack1.push('Diamonds')
console.log(stack1)