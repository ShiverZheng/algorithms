import BinaryTree from './BinaryTree';

const binaryTree = new BinaryTree();
binaryTree.insert(3);
binaryTree.insert(5);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(7);
binaryTree.insert(2);
console.log(binaryTree.getRoot());
binaryTree.inOrderTraverse(v => console.log(v));
