import BST from './BST';

const bst = new BST();
bst.insert(3);
bst.insert(5);
bst.insert(1);
bst.insert(6);
bst.insert(7);
bst.insert(2);
console.log(bst.getRoot());
bst.inOrderTraverse(v => console.log(v));
