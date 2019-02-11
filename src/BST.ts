export interface INode<T> {
    data: T;
    left: INode<T>;
    right: INode<T>;
}

export default class BST<T> {
    private root: INode<T>;
    constructor () {
        this.root = null;
    }

    getRoot = () => this.root;

    private node = (data: T, left: INode<T>, right: INode<T>) => ({ data, left, right });

    insert = (data: T) => {
        const node = this.node(data, null, null);
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

    find = (data: T) => {
        let current = this.root;
        while (true) {
            if (data === current.data) return current;
            current = data < current.data ? current.left : current.right;
            if (current === null) return null;
        }
    }

    private removeNode = (node: INode<T>, data: T) => {
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

    remove = (data: T) => {
        this.root = this.removeNode(this.root, data);
    }

    private inOrderTraverseNode = (node: INode<T>, callback: any) => {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.data);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    inOrderTraverse = (callback: any) => {
        this.inOrderTraverseNode(this.root, callback);
    }
}
