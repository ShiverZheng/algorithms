/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转
 *（例如，数组[0,1,2,3,4,5,6,7]可能变成[4,5,6,7,0,1,2]）。
 * 请找出其中最小的元素
 * 注意数组中可能存在重复的元素
 *
 * 示例1:
 *  输入: [1,3,5]
 *  输出: 1
 * 示例2:
 *  输入: [2,2,2,0,1]
 *  输出: 0
 *
 * 思路:
 *  旋转之后的数组由一个有序数组变成了两个有序数组，且第二个有序数组的最大值肯定小于等于第一个有序数组的最小值，可以使用二分法查找
 *  1、如果中间值大于最右边的值，那么此时最小值应该是在中间值的右边，移动左指针到中间值的右边
 *  2、如果中间值小于最右边的值，那么此时最小值应该在在中间值的左边，或者就是中间值，移动右指针到中间值
 *  3、如果中间值等于最右边的值，如[3,3,3,0,1,3],那么将右边的值左移一位
 */

function minNumberInRotateArray(array: number[]) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const mid = (left + right) / 2;
        if (array[mid] < array[right]) {
            right = mid;
        } else if (array[mid] > array[right]) {
            left = mid + 1;
        } else {
            right--;
        }
    }
    return array[right];
}
