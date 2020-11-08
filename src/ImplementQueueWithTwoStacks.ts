/**
 * 用两个栈来实现一个队列，完成队列的push和pop操作
 * 队列中方的元素为int
 *
 * 思路：
 *  栈1用于队列存储
 *  栈2用于接收栈1的出栈数据
 *  栈2出栈即栈1的底部数据出栈 即完成了队列的pop操作
 */

export default class Queue<T> {
    private stack1 = [];
    private stack2 = [];

    push(value: T) {
        this.stack1.push(value);
    }

    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop() || null;
    }
}
