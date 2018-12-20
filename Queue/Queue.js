const LinkedList = require('../LinkedList/LinkedList.js');

class Queue {
    /*
     * instantiantes a new Queue object
    */
    constructor() {
        this.ln = new LinkedList();
    }

    /*
     * enqueue - inserts an element into the queue
     * @element : element to be inserted
    */
    enqueue(element) {
        this.ln.push(element);
    }

    /*
     * dequeue - removes an element from the queue, or throws error
     *           if empty
     *           Returns removed element
    */
    dequeue() {
        if (this.ln.size == 0) throw new Error('Queue is empty');
        return this.ln.popFront().value;
    }
    

    /*
     * peek - returns the front of the queue, or throws error if empty
    */
    peek() {
        if (this.ln.size == 0) throw new Error('Queue is empty');
        return this.ln.back.value;
    }

    /*
     * isEmpty - returns whether or not queue is empty
    */
    isEmpty() {
        return (this.ln.size == 0);
    }
}

module.exports = Queue;
