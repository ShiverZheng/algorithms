class BST {
    constructor () {
        this.root = null;
    }

    node = (data, left, right) => ({ data, left, right });

    insert = (data) => {
        let node = this.node(data, null, null);
        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root;
            while (true) {
                if (current.data > data) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }

    find = (data) => {
        let current = this.root;
        while (true) {
            if (data === current.data) return current;
            current = data < current.data ? current.left : current.right;
            if (current === null) return null;
        }
    }

    removeNode = (node, data) => {
        if (node === null) return null;
        if (data === node.data) {
            if (node.left === null && node.right === null) return null;
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    remove = (data) => {
        this.root = this.removeNode(this.root, data)
    }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(9);
console.log(bst.root);
console.log(bst.find(6));