/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 *
 * 思路
 *   我们可以让目标数字和一个数字做与运算这个用户比较的数字必须只有一位是1其他位是0，这样就可以知道目标数字的这一位是否为0。
 *   所以用于比较的这个数字初始值为1，比较完后让1左移1位，这样就可以依次比较所有位是否为1。
 *  ———————— js中toString(2)可以将数字转为二进制，parseInt(x, 10)转回十进制。
 */

function numberOf1(n: number) {
    let flag = 1;
    let count = 0;
    while (flag) {
        if (flag & n) {
            count++;
        }
        flag = flag << 1;
    }
    return count;
}
