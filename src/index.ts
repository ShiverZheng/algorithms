import BinaryTree from './BinaryTree';
import { bezier } from './Bezier';
import { generateCircle, generatePoints } from './continuousCurve';
import findInMatrix from './findInMatrix';
import LinkedList from './LinkedList';

// const binaryTree = new BinaryTree();
// binaryTree.insert(3);
// binaryTree.insert(5);
// binaryTree.insert(1);
// binaryTree.insert(6);
// binaryTree.insert(7);
// binaryTree.insert(2);
// console.log(binaryTree.getRoot());
// binaryTree.inOrderTraverse(v => console.log(v));

// const points = [{ x: 20, y: 10 }, { x: 30, y: 14 }, { x: 34, y: 15 }];
// console.log(bezier(points, 200));

// /**
//  *
//  * 通过配置圆形 来生成连续的随机曲线
//  *
//  * */

// const circles = generateCircle({
//     maxRadius: 700,
//     minRadius: 300,
//     maxPercent: 60,
//     minPercent: 40,
//     length: 100,
// });

// const curvePoints = generatePoints(circles, 10);
// console.log(curvePoints);

// console.log(findInMatrix(6, [[1, 2, 3, 4],  [5, 6, 7, 8],  [9, 10, 11, 12], [13, 14, 15, 16]]));

const list = new LinkedList<number>();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(7, 3);
list.remove(2);
list.print();
console.log(list.find(1));
console.log(list.findLastNode());
console.log(list.findPreNode(7));
