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
        const hashedKey = hash(key);
        if (!exists(hashedKey, this.table)) {
            // case 1 : key is not there yet
            this.table[hashedKey] = new LinkedList();
            this.table[hashedKey].pushFront({ key : key, value : value });
            return null;
        }
        // case 2 : key is there, replace by the new value, and
        //          return old one
        return actOnElement(this.table, key, (itr) => {
            const oldValue = itr.get().value;
            itr.set({ key : key, value : value });
            return oldValue;
        });
    }

    /**
     * find - retrieves the value associated with the key
     * @key : key to search value with
     * Returns the value or null if the key is not found
    */
    find(key) {
        return actOnElement(this.table, key, (itr) => {
            return itr.get().value;
        });
    }

    /**
     * remove - removes an entry with the given key from the table.
     *          Returns the removed value, or throws error if key did not
     *          exist
     * @key : key of value to be removed
    */
    remove(key) {
        // case 1 : key does not exist
        if (!this.find(key)) {
            throw new Error('Key does not exist');
        }
        // case 2 : key is there. Remove and return value
        return actOnElement(this.table, key, (itr) => {
            return itr.remove().value; 
        });
    }

    /**
     * Returns number of elements in the hash table
    */
    size() {
        return this.size;
    }
}

const actOnElement = (table, key, func) => {
    // we store the result of the action of the passed-in
    // function. In case the element with the corresponding key
    // is not found, this will always return null
    let result = null;
    const hashedKey = hash(key);
    if (exists(hashedKey, table)) {
        const itr = table[hashedKey].iterator();
        while (itr.hasNext()) {
            itr.next();
            if (itr.get().key === key) {
                // re-assign result to the return value of the applied
                // function
                result = func.call(null, itr);
            }
        }
    }
    return result;
};

const exists = (key, table)  => {
    return typeof table[key] !== 'undefined';
};

const hash = (key) => {
    return key;
};

module.exports = HashTable;
