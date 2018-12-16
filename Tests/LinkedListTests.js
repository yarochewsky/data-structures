'use strict';

(function main() {

    const LinkedList = require('../LinkedList/LinkedList.js');
    const assert = require('assert');    

    describe('Linked List Test Suite', () => {
        const ln = new LinkedList();
        
        it('should be empty to start with', () => {
            assert.strictEqual(ln.size, 0);
        });

        it('should push properly', () => {
            ln.push(1);
            ln.push(2);
            assert.strictEqual(ln.size, 2);
            assert.strictEqual(ln.front.value, 1);
            assert.strictEqual(ln.front.next.value, 2);
            assert.strictEqual(ln.back.value, 2);
        });

        it('should remove properly', () => {
            const two = ln.pop();
            assert.strictEqual(ln.size, 1);
            assert.strictEqual(two.value, 2);
            const one = ln.pop();
            assert.strictEqual(ln.size, 0);
            assert.strictEqual(ln.front, null);
            assert.strictEqual(ln.back, null);
            assert.strictEqual(one.value, 1);
        }); 
        
        it('should throw exception when remove from empty', () => {
            assert.throws(() => {
                ln.pop();
            }, { message : 'Linked list is empty' });
        });
        
        it('should remove from the front', () => {
            ln.push(1);
            ln.push(2);
            const one = ln.popFront();
            assert.strictEqual(ln.size, 1);
            assert.strictEqual(one.value, 1);
            const two = ln.popFront();
            assert.strictEqual(ln.size, 0);
            assert.strictEqual(two.value, 2);
            assert.strictEqual(ln.back, null);
        });
        
        it('should add to the front', () => {
            ln.pushFront(1);
            assert.strictEqual(ln.size, 1);
            assert.strictEqual(ln.front.value, 1);
            assert.strictEqual(ln.back.value, 1);
        });
    });

}());
