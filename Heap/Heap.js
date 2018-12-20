class Heap {

    /**
     * constructor - instantiates a new empty heap
    */
    constructor() {
        // we store the size of the heap as the first element
        this.heapArray = [0]; 
    }

    /**
     * insert - inserts a new element to the heap
     * @element : element to be inserted
    */
    insert(element) {

    }

    /**
     * deleteMin - deletes element with highest priority (min value)
     * Returns removed element
    */
    deleteMin() {

    }

    /**
     * size - returns the size of the heap
    */
    size() {
        return this.heapArray[0];
    }

    /**
     * buildHeap - creates a heap out of an array, and replaces the current instance
     *             with the newly created heap
     * @data {Array} : list of elements to build new heap with
    */
    buildHeap(data) {

    }
} 


module.exports = Heap;
