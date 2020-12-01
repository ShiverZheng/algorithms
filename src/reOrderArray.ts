/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 *
 * 具有稳定性的排序算法：
 *  冒泡排序
 *  归并排序
 *  基数排序
 *  直接插入排序
 * 不具有稳定性的排序算法有：
 *  堆排序
 *  快速排序
 *  希尔排序
 *  直接选择排序
 */

const arr = [1, 6, 4, 2, 3, 7, 9, 8, 5];

function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function reOrderArray(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] % 2 === 0 && arr[j + 1] % 2 === 1) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
