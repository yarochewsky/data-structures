'use strict';

(function main() {
    
    const Stack = require('../Stack/Stack.js');
    const assert = require('assert');

    describe('Stack Test Suite', () => {
        const stack = new Stack();
        
        it('should push', () => {
            stack.push(1);
            assert.strictEqual(stack.isEmpty(), false);
        });

        it('should peek', () => {
            assert.strictEqual(stack.peek(), 1);
        });

        it('should pop', () => {
            const removedElement = stack.pop();
            assert.strictEqual(stack.isEmpty(), true);
            assert.strictEqual(removedElement, 1);
        });

        it('should throw error when popped empty', () => {
            assert.throws(() => {
                stack.pop();
            }, { message : 'Stack is empty' });
        });
    
        it('should throw error when peeked empty', () => {
            assert.throws(() => {
                stack.peek();
            }, { message : 'Stack is empty' });
        });

        it('should work for multiple values', () => {
            stack.push('hello');
            stack.push('world');
            stack.push('I\`m a stack');
            assert.strictEqual(stack.isEmpty(), false);
            assert.strictEqual(stack.pop(), 'I\`m a stack');
            assert.strictEqual(stack.pop(), 'world');
            assert.strictEqual(stack.pop(), 'hello');
            assert.strictEqual(stack.isEmpty(), true);
        });
    });

}());
