'use strict';

(function main() {
   
    const Queue = require('../Queue/Queue.js'); 
    const assert = require('assert');

    describe('Queue Test Suite', () => {
        const queue = new Queue();
        
        it('should push', () => {
            queue.push(1);
            assert.strictEqual(queue.isEmpty(), false);
        });

        it('should peek', () => {
            assert.strictEqual(queue.peek(), 1);
        });

        it('should pop', () => {
            const removedElement = queue.pop();
            assert.strictEqual(queue.isEmpty(), true);
            assert.strictEqual(removedElement, 1);
        });

        it('should throw error when popped empty', () => {
            assert.throws(() => {
                queue.pop();
            }, { message : 'Queue is empty' });
        });
    
        it('should throw error when peeked empty', () => {
            assert.throws(() => {
                queue.peek();
            }, { message : 'Queue is empty' });
        });

        it('should work for multiple values', () => {
            queue.push('hello');
            queue.push('world');
            queue.push('I\`m a queue');
            assert.strictEqual(queue.isEmpty(), false);
            assert.strictEqual(queue.pop(), 'hello');
            assert.strictEqual(queue.pop(), 'world');
            assert.strictEqual(queue.pop(), 'I\'m a queue');
            assert.strictEqual(queue.isEmpty(), true);
        });
    });

}());
