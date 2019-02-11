"use strict";
exports.__esModule = true;
var BST_1 = require("./BST");
var bst = new BST_1["default"]();
bst.insert(3);
bst.insert(5);
bst.insert(1);
bst.insert(6);
bst.insert(7);
bst.insert(2);
console.log(bst.getRoot());
bst.inOrderTraverse(function (v) { return console.log(v); });
