const LinkedList = require('../LinkedList/LinkedList.js');

class Stack {
    /**
     * constructor - instantiates a new Stack object
    */
    constructor() {
        this.ln = new LinkedList();
    }

    /*
     * peek - returns the element on the top of the stack (null is empty)
    */
    peek() {
        return this.ln.front.value;
    }

    /*
     * push - pushes a new element to the stack
    */
    push(element) {
        this.ln.push(element);
    }

    /*
     * pop - pop an element from the top of the stack, throws error
     *       if stack is empty
     *       Returns the removed element
    */
    pop(element) {
        if (this.ln.size == 0) {
            throw new Error('Stack is empty');
        }
        return this.ln.popFront().value;
    }

    /*
     * isEmpty - returns whether stack is empty
    */
    isEmpty() {
        return (this.ln.size == 0);
    }
}

module.exports = Stack;
