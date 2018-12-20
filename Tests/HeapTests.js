'use strict';

(function main() {

    const Heap = require('../Heap/Heap.js');
    const assert = require('assert');

    describe('Heap Test Suite', () => {
        const heap = new Heap();
               
        it('should insert', () => {
            heap.insert(1);
            heap.insert(2);
            heap.insert(3);
            assert.strictEqual(heap.size(), 3);
        });

        it('should delete min', () => {
            const one = heap.deleteMin();
            assert.strictEqual(one, 1);
            assert.strictEqual(heap.size(), 2);
        });

        it('should percolate up', () => {
            heap.insert(0);
            const zero = heap.deleteMin();
            assert.strictEqual(zero, 0);
        });

        it('should percolate down', () => {
            heap.insert(5);
            const two = heap.deleteMin();
            assert.strictEqual(two, 2);
        });

        it('should build heap', () => {
            heap.buildHeap([1, 5, 10, 2, 7, 2, 3]);
            assert.strictEqual(heap.size(), 7);
            assert.strictEqual(heap.deleteMin(), 1);
        });
       
        it('should throw when deleted from empty', () => {
            for (let i = 0; i < 6; i++) {
                heap.deleteMin();
            }
            assert.throws(() => {
                heap.deleteMin();
            }, { message : 'Heap is empty' });
        }); 

    });

}());
