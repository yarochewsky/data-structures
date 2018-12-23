'use strict';

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
        const seedDict = {'f' : 1, 'd' : 2, 'g' : 3, 'c' : 4, 'e' : 5};
        bst.buildTree(seedDict);
        assert.strictEqual(bst.size(), 5);
        Object.entries(seedDict).forEach(([key, value]) => {
            assert.strictEqual(bst.find(key), value);
        });
        bst.remove('d');
        assert.strictEqual(bst.size(), 4);
        assert.strictEqual(bst.find('d'), null);
        bst.insert('d', 4);
        assert.strictEqual(bst.find('d'), 4);
        assert.strictEqual(bst.size(), 5);
    });

    it('should throw for deleting non-existant key', () => {
        assert.throws(() => {
            bst.remove('z');
        }, { message : 'Key does not exist' }); 
    });
});
