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
        if (this.heapArray[this.heapArray[0] + 1]) {
            this.heapArray[this.heapArray[0] + 1] = element;
        } else {
            this.heapArray.push(element);
        }
        // update size
        this.heapArray[0]++;
        // percolate up as needed
        percolateUp(element, this.heapArray);
    }

    /**
     * deleteMin - deletes element with highest priority (min value)
     *             Throws exception if heap is empty
     * Returns removed element
    */
    deleteMin() {
        if (this.heapArray[0] == 0) throw new Error('Heap is empty');
        const deletedElement = this.heapArray[1];
        // decrease size
        this.heapArray[0]--;
        if (this.heapArray[0] == 0) return deletedElement;
        // ok, we need to fill the hole then
        // we change places with the last element, being careful since
        // we've already decreased the size, so it is actually in size + 1
        this.heapArray[1] = this.heapArray[this.heapArray[0] + 1]; 
        // now, percolate down as needed
        percolateDown(this.heapArray);
        // and ... return min
        return deletedElement;
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
        // copy size and elements to current heap
        this.heapArray = [data.length];
        for (let i = 0; i < data.length; i++) {
            this.heapArray.push(data[i]);
        }
        // percolate down
        for (let i = Math.floor(this.heapArray[0] / 2); i >= 1; i--) {
            // we call the helper here because we want to specify the index
            percolateDownHelper(this.heapArray[i], this.heapArray, i);
        }
    }

} 

const percolateUp = (target, heapArray) => {
    percolateUpHelper(target, heapArray, heapArray[0]);
};

const percolateUpHelper = (target, heapArray, index) => {
    const parentIndex = Math.floor(index / 2);
    if (index > 1 && target < heapArray[parentIndex]) {
        heapArray[index] = heapArray[parentIndex];
        heapArray[parentIndex] = target;
        percolateUpHelper(target, heapArray, parentIndex);
    }
};

const percolateDown = (heapArray) => {
    // index of element to be percolated is at root
    percolateDownHelper(heapArray[1], heapArray, 1);
};

const percolateDownHelper = (target, heapArray, index) => {
    if (index < heapArray[0]) {
        if (target > heapArray[2 * index] || target > heapArray[2 * index + 1]) {
            const minIndex = findMinChild(heapArray[2 * index], heapArray[2 * index + 1], target); 
            // ok, parent is greater than some child
            // we do a neat trick of summing minIndex since it gives us
            // the left child if the parent is greater than it (2 * i)
            // or the right child if the parent is greater than it (2 * i + 1)
            heapArray[index] = heapArray[2 * index + minIndex];
            heapArray[2 * index + minIndex] = target;
            percolateDownHelper(target, heapArray, 2 * index + minIndex);
        }
    }
};

/**
 * findMinChild - finds the child less than target
 * @left : left child
 * @right : right child
 * @target : parent to be compared with children
 * Returns 0 if left < parent, 1 if right > parent
*/
const findMinChild = (left, right, parentValue) => {
    if (left < right || right == undefined) return 0;
    return 1;
};

module.exports = Heap;
