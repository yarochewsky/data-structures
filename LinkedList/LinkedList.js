const LinkedListNode = require('./LinkedListNode.js');

class LinkedList {
    /**
     * constructor - sets the front node to null, and the size
     *               of the list to zero.
    */
    constructor() {
        this.front = null;
        this.size = 0;
    }

    /*
     * push - inserts a new node to the back of the list with a value
     * @value {Integer} : new value to be inserted
    */
    push(value) {
        if (this.size == 0) {
            // front of the list
            this.front = new LinkedListNode(value);
        } else {
            // middle of the list
            let current = this.front;
            while (current.next) {
                current = current.next;
            }
            current.next = new LinkedListNode(value);
        }
        this.size++;
    }

    /*
     * pushFront - inserts a new node to the front of the list with a value
     * @value {Integer} : new value to be inserted
    */
    pushFront(value) {
        if (this.size == 0) {
            this.front = new LinkedListNode(value);
        } else {
            const nextToFront = this.front;
            this.front = new LinkedListNode(value);
            this.front.next = nextToFront;
        }
        this.size++;
    }
    
    /*
     * pop - removes a node from the back of the list, or throws an error if list is empty
     * Returns the node that was removed
    */
    pop() {
        if (this.size == 0) throw new Error('Linked list is empty');
        if (this.size == 1) {
            let front = this.front;
            this.front = null;
            this.size--;
            return front; 
        }
        let current = this.front;
        while (current.next.next) {
            current = current.next;
        }
        let removedNode = current.next;
        current.next = null;
        this.size--;
        return removedNode;
    }

    /*
     * popFront - removes a node from the front of the list, or throws an error if list is empty
     * Returns the node that was removed
    */
    popFront() {
        if (this.size == 0) throw new Error('Linked list is empty');
        let removedNode = this.front;
        this.size--;
        this.front = this.front.next;
        return removedNode;
    }
}

module.exports = LinkedList;
