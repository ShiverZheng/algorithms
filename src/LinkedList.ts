class LinkedListNode<T> {
    public next: LinkedListNode<T>;
    public key: T;

    constructor(key: T) {
        this.next = null;
        this.key = key;
    }
}

export default class LinkedList<T> {
    private head: LinkedListNode<T>;

    constructor() {
        this.head = null;
    }

    static createNode<T>(key: T) {
        return new LinkedListNode(key);
    }

    find(key: T) {
        let currentNode = this.head;
        while (currentNode && currentNode.key !== key) {
            if (currentNode.next) {
                currentNode = currentNode.next;
            } else {
                currentNode = null;
            }
        }
        return currentNode;
    }

    findPreNode(key: T) {
        let currentNode = this.head;
        while (currentNode && currentNode.next && currentNode.next.key !== key) {
            if (currentNode.next) {
                currentNode = currentNode.next;
            } else {
                currentNode = null;
            }
        }
        return currentNode;
    }

    findLastNode() {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert(key: T, target?: T) {
        const newNode = LinkedList.createNode<T>(key);
        if (target) {
            const currentNode = this.find(target);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        } else {
            if (this.head) {
                const lastNode = this.findLastNode();
                lastNode.next = newNode;
            } else {
                this.head = LinkedList.createNode<T>(key);
            }
        }
    }

    remove(key: T) {
        const preNode = this.findPreNode(key);
        if (preNode.next != null) {
            preNode.next = preNode.next.next;
        }
    }

    print() {
        let currentHead = this.head;
        while (currentHead.next !== null) {
            console.log(currentHead.key);
            currentHead = currentHead.next;
        }
        console.log(currentHead.key);
    }
}
