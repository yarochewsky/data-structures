const LinkedListNode = require('./LinkedListNode.js');

class LinkedList {
    /**
     * constructor - sets the front node to null, and the size
     *               of the list to zero.
    */
    constructor() {
        this.front = null;
        this.back = this.front;
        this.size = 0;
    }

    /*
     * push - inserts a new node to the back of the list with a value
     * @value : new value to be inserted
    */
    push(value) {
        if (this.size == 0) {
            this.front = new LinkedListNode(value);
            this.back = this.front;
        } else {
            this.back.next = new LinkedListNode(value);
            this.back = this.back.next;
        }
        this.size++;
    }

    /*
     * pushFront - inserts a new node to the front of the list with a value
     * @value : new value to be inserted
    */
    pushFront(value) {
        if (this.size == 0) {
            this.front = new LinkedListNode(value);
            this.back = this.front;
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
            this.back = null;
            this.size--;
            return front; 
        }
        let current = this.front;
        while (current.next.next) {
            current = current.next;
        }
        this.back = current;
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
        if (this.size == 1) this.back = null;
        let removedNode = this.front;
        this.size--;
        this.front = this.front.next;
        return removedNode;
    }

    iterator() {
        return new Iterator(this);
    }
}

class Iterator {
    /**
     * constructor - initializes a new iterator for the linked list
     * @linkedList : linked list to iterate over
    */
    constructor(linkedList) {
        this.curr = linkedList.front;
    }

    /**
     * get - returns outstanding element at the iterator
    */
    get() {
        return this.curr;
    }

    /**
     * hasNext - returns whether or not iterator can go to next element
    */
    hasNext() {
        if (!this.curr) return false;
        return this.curr.next == null ? false : true;
    }

    /**
     * next - advances the iterator to the next element
     *        Throws error if called when hasNext == false
    */
    next() {
        if (!this.hasNext()) throw new Error('Next element is null');
        this.curr = this.curr.next;
        return this.curr;
    }

    /**
     * set - sets the value of the current node to the given one
     * @value : value to set node's value to
    */
    set(value) {
        this.curr.value = value;
    }

    /**
     * remove - removes the current element of the linked list, and skips
     *          to the next one. (null if removed the tail of the list)
     *          Returns the removed element, or null if current node is empty
    */
    remove() {
        if (!this.curr) return null;
        const removedNode = this.curr;
        this.curr = this.curr.next;
        return removedNode;
    }
}

module.exports = LinkedList;
