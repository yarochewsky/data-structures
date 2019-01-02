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


    /**
     * remove - removes a node with the given value from the list
     * @value : value to be removed
     * Returns removed value or null if value is not present. Throws error
     * if list is empty
    */
    remove(value) {
        if (this.size == 0) throw new Error('Linked list is empty');
        if (this.front.value == value) {
            this.front = this.front.next;
            if (this.size == 1) {
                this.back = this.front;
            }
            this.size--;
            return value;
        }
        let curr = this.front;
        while (curr.next) {
            if (curr.next.value == value) {
                curr.next = curr.next.next;
                if (this.back.value == value) {
                    this.back = curr;
                }
                this.size--;
                return value;
            } else {
                curr = curr.next; 
            }
        }
        return null; 
    }

    /**
     * set - sets value of an element to new value
     * @element : element to set value to
     * @value : new value to set element to
     * Returns new value replaced on element, or null if element
     * was not found
    */
    set(element, value) {
        let curr = this.front;
        while (curr) {
            if (curr.value == element) {
                curr.value = value;
                return value;
            }
        }
        return null;
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
        this.ln = linkedList;
        this.curr = null;
        this.first = true;
    }

    /**
     * hasNext - returns whether or not iterator can go to next element
    */
    hasNext() {
        if (this.first) return true;
        return (!this.curr || this.curr.next == null) ? false : true;
    }

    /**
     * next - advances the iterator to the next element
     *        and returns the advanced element
     *        Throws error if called when hasNext == false
    */
    next() {
        if (!this.hasNext()) throw new Error('Next element is null');
        if (this.first) {
            this.curr = this.ln.front;
            this.first = false;
        } else {
            this.curr = this.curr.next;
        }
        return this.curr.value;
    }
}

module.exports = LinkedList;
