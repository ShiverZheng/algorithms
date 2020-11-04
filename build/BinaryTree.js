var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        var _this = this;
        this.getRoot = function () { return _this.root; };
        this.node = function (data, left, right) { return ({ data: data, left: left, right: right }); };
        this.insert = function (data) {
            var node = _this.node(data, null, null);
            if (_this.root === null) {
                _this.root = node;
            }
            else {
                var current = _this.root;
                while (true) {
                    if (current.data > data) {
                        if (current.left === null) {
                            current.left = node;
                            break;
                        }
                        current = current.left;
                    }
                    else {
                        if (current.right === null) {
                            current.right = node;
                            break;
                        }
                        current = current.right;
                    }
                }
            }
        };
        this.find = function (data) {
            var current = _this.root;
            while (true) {
                if (data === current.data)
                    return current;
                current = data < current.data ? current.left : current.right;
                if (current === null)
                    return null;
            }
        };
        this.removeNode = function (node, data) {
            if (node === null)
                return null;
            if (data === node.data) {
                if (node.left === null && node.right === null)
                    return null;
                if (node.left === null)
                    return node.right;
                if (node.right === null)
                    return node.left;
            }
            else if (data < node.data) {
                node.left = _this.removeNode(node.left, data);
                return node;
            }
            else {
                node.right = _this.removeNode(node.right, data);
                return node;
            }
        };
        this.remove = function (data) {
            _this.root = _this.removeNode(_this.root, data);
        };
        this.inOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                _this.inOrderTraverseNode(node.left, callback);
                callback(node.data);
                _this.inOrderTraverseNode(node.right, callback);
            }
        };
        this.preOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                callback(node.data);
                _this.preOrderTraverseNode(node.left, callback);
                _this.preOrderTraverseNode(node.right, callback);
            }
        };
        this.postOrderTraverseNode = function (node, callback) {
            if (node !== null) {
                _this.postOrderTraverseNode(node.left, callback);
                _this.postOrderTraverseNode(node.right, callback);
                callback(node.data);
            }
        };
        this.inOrderTraverse = function (callback) {
            _this.inOrderTraverseNode(_this.root, callback);
        };
        this.preOrderTraverse = function (callback) {
            _this.preOrderTraverseNode(_this.root, callback);
        };
        this.postOrderTraverse = function (callback) {
            _this.postOrderTraverseNode(_this.root, callback);
        };
        this.root = null;
    }
    return BinaryTree;
}());
export default BinaryTree;
