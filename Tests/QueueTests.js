'use strict';

(function main() {
   
    const Queue = require('../Queue/Queue.js'); 
    const assert = require('assert');

    describe('Queue Test Suite', () => {
        const queue = new Queue();
        
        it('should enqueue', () => {
            queue.enqueue(1);
            assert.strictEqual(queue.isEmpty(), false);
        });

        it('should peek', () => {
            assert.strictEqual(queue.peek(), 1);
        });

        it('should dequeue', () => {
            const removedElement = queue.dequeue();
            assert.strictEqual(queue.isEmpty(), true);
            assert.strictEqual(removedElement, 1);
        });

        it('should throw error when dequeueped empty', () => {
            assert.throws(() => {
                queue.dequeue();
            }, { message : 'Queue is empty' });
        });
    
        it('should throw error when peeked empty', () => {
            assert.throws(() => {
                queue.peek();
            }, { message : 'Queue is empty' });
        });

        it('should work for multiple values', () => {
            queue.enqueue('hello');
            queue.enqueue('world');
            queue.enqueue('I\'m a queue');
            assert.strictEqual(queue.isEmpty(), false);
            assert.strictEqual(queue.dequeue(), 'hello');
            assert.strictEqual(queue.dequeue(), 'world');
            assert.strictEqual(queue.dequeue(), 'I\'m a queue');
            assert.strictEqual(queue.isEmpty(), true);
        });
    });

}());
