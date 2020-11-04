/**
 * 在一个二维数组中（每个一维数组的长度相同）,每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个函数，判断数组中是否含有该整数。
 * [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,10,11,12],
 *  [13,14,15,16]
 * ]
 *
 * 思路：因为矩阵每行和每列均为递增，所以定义矩阵的右上角为基准值，
 *      如果目标值小于基准值，那么目标值所处的矩阵为除去基准值所在列的左边的矩阵
 *      如果目标值大于基准值，那么目标值所处的矩阵为除去基准值所在行的下面的矩阵
 */

export default function findInMatrix(target: number, array: number[][]) {
    const rows = array.length;
    const cols = array[0].length;

    // 定义起始点 从矩阵的右上角开始
    let x = 0;
    let y = cols - 1;

    while (x < rows && y >= 0) {
        if (array[x][y] === target) return true;
        if (array[x][y] > target) {
            y--;
        } else {
            x++;
        }
    }
    return false;
}
