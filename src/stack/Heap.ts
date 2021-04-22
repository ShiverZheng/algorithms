// 堆的底层实际上是一棵完全二叉树，可以用数组实现。

// 二叉树的一种，满足以下条件：

// 任意节点大于或小于它的所有子节点（大根堆、小根堆）
// 总是一完全树，即除了最底层，其它层的节点都被元素填满
// 将根节点最大的堆叫做最大堆或大根堆，根节点最小的堆叫做最小堆或小根堆。

// 左子节点位置是 2 * i + 1
// 右子节点位置是 2 * i + 2
// 最后一个非叶子节点 (n / 2) - 1
// 父节点位置是 Math.floor(i / 2) - 1

// 堆（以大顶堆为例）相关的操作主要有：
// 大顶堆调整（Max-Heapify），将堆的末端子节点做调整，使得子节点永远小于父节点；
// 创建大顶堆（Build-Max-Heap），将堆中所有数据调整位置，使其成为大顶堆；
// 堆排序（Heap-Sort），移除在堆顶的根节点，并做大顶堆调整的迭代运算

/**
 * 最大堆
 */
function left(i: number) {
    return i * 2 + 1;
}

function right(i: number) {
    return i * 2 + 2;
}

function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

class Heap {
    public data: number[];
    constructor(arr: number[]) {
        this.data = [...arr];
    }

    buildHeap() {
        // 从最后一个非叶子节点开始，向上堆化
        const lastestParentIndex = Math.floor(this.data.length / 2) - 1;
        for (let i = lastestParentIndex; i >= 0; i--) {
            this.maxHeapify(i, this.data.length - 1);
        }
    }

    isHeap() {
        const lastestParentIndex = Math.floor(this.data.length / 2) - 1;
        for (let i = lastestParentIndex; i >= 0; i++) {
            const l = this.data[left(i)] || Number.MIN_SAFE_INTEGER;
            const r = this.data[right(i)] || Number.MIN_SAFE_INTEGER;
            const max = Math.max(this.data[i], l, r);
            if (max !== this.data[i]) {
                return false;
            }
            return true;
        }
    }

    // 堆排序（Heap-Sort）
    // 1.将待排序的关键字序列（R1,R2,...Rn）构建大顶堆，此堆为初始的无序区.

    // 2.将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区
    // (R1,R2,......Rn-1)和新的有序区(Rn),且满足R[1,2...n-1]<=R[n];

    // 3.由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,......Rn-1)调整为新堆，
    // 然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2....Rn-2)和新的有序区(Rn-1,Rn)。
    // 不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
    sort() {
        this.buildHeap();
        // 构建完最大堆之后第一个元素就是最大的
        // 将第一个元素与最后一个元素交换，并且减少一个数组长度，用来将换到最后的元素（最大值）踢出下一次排序
        for (let i = this.data.length - 1; i > 0; i--) {
            swap(this.data, 0, i);
            this.maxHeapify(0, i - 1);
        }
    }

    push(value: number) {
        this.data.push(value);
        if (this.isHeap()) {
            return;
        }
        this.buildHeap();
    }

    delete(index: number) {
        if (index >= this.data.length - 1) {
            return;
        }
        const deleted = this.data.splice(index, 1);
        if (this.isHeap()) {
            return;
        }
        this.buildHeap();
        return deleted[0];
    }

    pop() {
        return this.delete(0);
    }

    maxHeapify(index: number, maxIndex: number) {
        // 从给定位置开始创建最大堆
        let max = index;

        if (index >= maxIndex) {
            return;
        }

        // 求左右节点中较大的索引
        const l = left(index);
        const r = right(index);

        // 如果子节点大于当前节点，交换当前节点和子节点，继续从子节点的位置开始构建
        if (l <= maxIndex && this.data[l] > this.data[max]) {
            max = l;
        }

        if (r <= maxIndex && this.data[r] > this.data[max]) {
            max = r;
        }

        // 如果当前节点已经满足最大堆，结束
        if (max === index) {
            return;
        }

        swap(this.data, index, max);

        // 递归向下继续执行
        return this.maxHeapify(max, maxIndex);
    }
}

const array = [1, 4, 6, 2, 3, 8, 9, 7];
const h = new Heap(array);
h.buildHeap();
console.log(h.data);
h.push(0);
console.log(h.data);
h.push(5);
console.log(h.data);
h.sort();
console.log(h.data);
h.pop();
console.log(h.data);
h.pop();
console.log(h.data);
