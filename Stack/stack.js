class Stack {
    constructor() {
        this.arr = [];
    }

    push(element) {
        this.arr.push(element);
    }

    pop(element) {
        if (this.arr.length == 0) {
            throw new Error('Stack is empty');
        }
        // LIFO ADT -> pop is from the top of the stack,
        //             back of the list
        this.arr.pop();
    }

    isEmpty() {
        return (this.arr.length == 0);
    }

    toString() {
        let stackString = 'TOP';
        this.arr.forEach((element) => {
            stackString += ' | ' + element;
        });
        stackString += ' BOTTOM';
        return stackString;
    }
}

module.exports = Stack;
