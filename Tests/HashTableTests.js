'use strict';

(function main() {
    const HashTable = require('../HashTable/HashTable.js');
    const assert = require('assert');
    
    describe('Hash Table Test Suite', () => {
        
        let hashTable = new HashTable();
        
        it('should insert', () => {
            assert.strictEqual(hashTable.insert(1, 2), null);
            assert.strictEqual(hashTable.insert(2, 3), null);
            assert.strictEqual(hashTable.size, 2);
        });

        it('should find', () => {
            assert.strictEqual(hashTable.find(1), 2);
            assert.strictEqual(hashTable.find(2), 3);
        });

        it('should return old value for existant key', () => {
            assert.strictEqual(hashTable.insert(1, 5), 2);
        });

        it('should remove', () => {
            assert.strictEqual(hashTable.remove(1).value, 5);
            assert.strictEqual(hashTable.remove(2).value, 3);
            assert.strictEqual(hashTable.find(1), null);
            assert.strictEqual(hashTable.find(2), null);
            assert.strictEqual(hashTable.size, 0);
        });
        
        it('should throw for non-existant key', () => {
            assert.throws(() => {
                hashTable.remove(1);
            }, { message : 'Key does not exist' });
        });
    
        it('should work for multiple elements', () => {
            const hashTableSeed = { 'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5, 'f' : 6 };
            hashTable = new HashTable();
            Object.entries(hashTableSeed).forEach(([key, value]) => {
                assert.strictEqual(hashTable.insert(key, value), null);
                assert.strictEqual(hashTable.find(key), value);
                assert.strictEqual(hashTable.size, value);
            });
            Object.entries(hashTableSeed).forEach(([key, value]) => {
                assert.strictEqual(hashTable.remove(key).value, value);
                assert.strictEqual(hashTable.find(key), null);
            });
            assert.strictEqual(hashTable.size, 0);
        });
    });

}());
