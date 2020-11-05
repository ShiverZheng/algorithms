/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 *
 * 思路：
 * 前序遍历：跟节点 + 左子树前序遍历 + 右子树前序遍历
 * 中序遍历：左子树中序遍历 + 跟节点 + 右字数中序遍历
 * 后序遍历：左子树后序遍历 + 右子树后序遍历 + 跟节点
 *
 * 前序遍历找到根结点root
 * 找到root在中序遍历的位置 -> 左子树的长度和右子树的长度
 * 截取左子树的中序遍历、右子树的中序遍历
 * 截取左子树的前序遍历、右子树的前序遍历
 * 递归重建二叉树
 */

class TreeNode<T> {
    public left: TreeNode<T>;
    public right: TreeNode<T>;
    public key: T;
    constructor(key: T) {
        this.key = key;
    }
}

export default function reConstructBinaryTree(pre: number[], vin: number[]) {
    if (pre.length === 0 || vin.length === 0) return null;
    if (pre.length === 1) return new TreeNode(pre[0]);

    const root = pre[0];
    const rootIndex = vin.indexOf(root);
    const vinLeft = vin.slice(0, rootIndex);
    const vinRight = vin.slice(rootIndex);
    const preLeft = pre.slice(1, rootIndex + 1);
    const preRight = pre.slice(rootIndex + 1);
    const node = new TreeNode(root);
    node.left = reConstructBinaryTree(preLeft, vinLeft);
    node.right = reConstructBinaryTree(preRight, vinRight);
    return node;
}
