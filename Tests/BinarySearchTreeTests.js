'use strict';

(function main() {
    const BinarySearchTree = require('../BinarySearchTree/BinarySearchTree.js');
    const assert = require('assert');

    describe('Binary Search Tree Test Suite', () => {
        const bst = new BinarySearchTree();

        it('should insert', () => {
            bst.insert(1, -1);
            bst.insert(2, -2);
            bst.insert(3, -3)
            assert.strictEqual(bst.size(), 3);
        });

        it('should remove', () => {
            bst.remove(2);
            assert.strictEqual(bst.size(), 2);
        });
        
        it('should find', () => {
            const minusThree = bst.find(3);
            assert.strictEqual(minusThree, -3);
        });

        it('should work for multiple elments', () => {
            const seedDict = {'h' : 1, 'd' : 2, 'j' : 3, 'b' : 4, 'e' : 5,
                              'k' : 6, 'i' : 7, 'a' : 8, 'c' : 9 };
            bst.buildTree(seedDict);
            assert.strictEqual(bst.size(), 9);
            Object.entries(seedDict).forEach(([key, value]) => {
                assert.strictEqual(bst.find(key), value);
            });
            bst.insert('f', 10);
            assert.strictEqual(bst.size(), 10);
            assert.strictEqual(bst.find('f'), 10);
            bst.insert('l', 11);
            assert.strictEqual(bst.size(), 11);
            assert.strictEqual(bst.find('l'), 11);
            bst.remove('b');
            // 2 child case
            assert.strictEqual(bst.size(), 10);
            assert.strictEqual(bst.find('b'), null);
            assert.strictEqual(bst.find('c'), 9);
            bst.remove('j');
            assert.strictEqual(bst.size(), 9);
            assert.strictEqual(bst.find('j'), null);
            // leaf case
            bst.remove('l');
            assert.strictEqual(bst.size(), 8);
            assert.strictEqual(bst.find('l'), null);
            // lone child case
            bst.remove('e');
            assert.strictEqual(bst.size(), 7);
            assert.strictEqual(bst.find('e'), null);
        });

        it('should throw for deleting non-existant key', () => {
            assert.throws(() => {
                bst.remove('z');
            }, { message : 'Key does not exist' }); 
        });
    });
}());
