const TreeNode = require('./TreeNode.js');

class BinarySearchTree {
    /**
     * constructor - instantiates a new BST
    */
    constructor() {
        this.root = null;
    }

    /**
     * insert - inserts the value into the key if key is not present,
     *          or replaces the current value with the new one for the key
    */
    insert(key, value) {
        this.root = insertHelper(this.root, key, value);
    }

    /**
     * remove - deletes the entry with the given key from the tree.
     * @key : key of value to be removed
     *          Throws exception if key does not exist
     *          Returns removed value
    */
    remove(key) {
        const foundNode = this.find(key);
        if (!foundNode) throw new Error('Key does not exist'); 
        this.root = removeHelper(key, this.root);
    }

    /**
     * find - retrieves the value of the key in the tree
     * @key : key of value to be retrieved
     * Returns value or null if key does not exist
    */
    find(key) {
        const foundNode = findHelper(key, this.root);
        return foundNode ? foundNode.value : foundNode;
    }

    /**
     * size - returns number of nodes in the tree
    */
    size() {
        return sizeHelper(this.root);
    }

    /**
     * buildTree - replaces current tree with the data given
     * @data : dictionary of key/value pairs to populate new tree
    */
    buildTree(data) {
        let root = null;
        Object.entries(data).forEach(([key, value]) => {
            if (!root) {
                root = new TreeNode(key, value, null, null);
            } else {
                root = insertHelper(root, key, value);
            }
        });
        this.root = root;
    }
}

const insertHelper = (node, key, value) => {
    if (!node) {
        return new TreeNode(key, value, null, null);
    }
    if (key > node.key) {
        // go right
        node.right = insertHelper(node.right, key, value);
    }
    if (key < node.key) {
        // go left
        node.left = insertHelper(node.left, key, value);
    }
    if (key === node.key) {
        node.value = value;
    }
    return node;
};

const findHelper = (key, node) => {
    if (!node) return null;
    if (key === node.key) return node;
    if (key > node.key) return findHelper(key, node.right);
    return findHelper(key, node.left);
};

const removeHelper = (key, node) => {
    if (!node) return node;
    if (node.key > key) {
        node.left = removeHelper(key, node.left);
    } else if (node.key < key) {
       node.right = removeHelper(key, node.right);
    } else {
        if (!node.left && !node.right) {
            // leaf case
            return null;
        } else if (!node.left && node.right ||
                node.left && !node.right) {
            // lonely child case; raise child to deleted parent
            return node.left ? node.left : node.right;
        } else {
            // two children case
            // find min of right subtree, replace parent
            const sucessor = findMin(node.right);
            sucessor.left = node.left;
            sucessor.rigth = node.right;
            return sucessor;
        }
    } 
    return node;
};


const findMin = (node) => {
    if (!node.left && !node.right) {
        return node;
    }
    else if (!node.left && node.right) {
        const sucessor = node;
        node = node.right;
        return sucessor;
    }
    return findMin(node.left);
}

const sizeHelper = (node) => {
    if (!node) return 0;
    return 1 + sizeHelper(node.left) + sizeHelper(node.right);
};

module.exports = BinarySearchTree;
