'use strict';

const LinkedList = require('../LinkedList/LinkedList.js');

class HashTable {

    /**
     * constructor - initializes an empty hash table object
    */
    constructor() {
        this.table = [];
        this.size = 0;
    }

    /**
     * insert - inserts the value with the key into the table. If the key
     *          already exists, replaces the old value by the new key.
     * @key : key to be inserted
     * @value : value of entry to be inserted
     *          Returns the old value if a key already exists, or null
    */
    insert(key, value) {
        
    }

    /**
     * find - retrieves the value associated with the key
     * @key : key to search value with
     * Returns the value or null if the key is not found
    */
    find(key) {
        const hashedKey = hash(key);
        if (this.table[hashedKey]) {
        }
        return null;
    }

    /**
     * remove - removes an entry with the given key from the table.
     *          Returns the removed value, or throws error if key did not
     *          exist
     * @key : key of value to be removed
    */
    remove(key) {

    }

    /**
     * Returns number of elements in the hash table
    */
    size() {
        return this.size;
    }
}

const hash = (key) => {
    return hashedKey;
};

module.exports = HashTable;
