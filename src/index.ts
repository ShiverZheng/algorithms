import BinaryTree from './BinaryTree';
import { bezier } from './Bezier';

const binaryTree = new BinaryTree();
binaryTree.insert(3);
binaryTree.insert(5);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(7);
binaryTree.insert(2);
console.log(binaryTree.getRoot());
binaryTree.inOrderTraverse(v => console.log(v));

const points = [{ x: 20, y: 10 }, { x: 30, y: 14 }, { x: 34, y: 15 }];
console.log(bezier(points, 200));
