const TreeNode = require('./TreeNode.js');

class BinarySearchTree {
    /**
     * constructor - instantiates a new BST
    */
    constructor() {
        this.root = null;
        this.size = 0;
    }

    /**
     * insert - inserts the value into the key if key is not present,
     *          or replaces the current value with the new one for the key
    */
    insert(key, value) {
    }

    /**
     * remove - deletes the entry with the given key from the tree.
     * @key : key of value to be removed
     *          Throws exception if key does not exist
     *          Returns removed value
    */
    remove(key) {
       if (!findKey(key)) throw new Error('Key does not exist'); 
    }

    /**
     * find - retrieves the value of the key in the tree
     * @key : key of value to be retrieved
     * Returns value or null if key does not exist
    */
    find(key) {

    }

    /**
     * size - returns number of nodes in the tree
    */
    size() {
        return this.size;
    }

    /**
     * buildTree - replaces current tree with the data given
     * @data : dictionary of key/value pairs to populate new tree
    */
    buildTree(data) {

    }
}

module.exports = BinarySearchTree;
