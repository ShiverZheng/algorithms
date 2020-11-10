/**
 * 斐波那契数，通常用F(n)表示，形成的序列称为斐波那契数列。该数列由0和1开始，后面的每一项数字都是前面两项数字的和。也就是：
 * f(0) = 0, f(1) = 1;
 * f(n) = f(n - 1) + f(n - 2), 其中 n > 1.
 * 给定n，计算  f(n)。
 * 先大概预览一下斐波那契数列的样子：
 * 1、1、2、3、5、8、13、21、34
 */

class Fibonacci {
    // 递归方法
    static recursion(n: number) {
        if (n === 1 || n === 2) {
            return 1;
        }
        return Fibonacci.recursion(n - 2) + Fibonacci.recursion(n - 1);
    }

    // 动态规划
    static dynamicProgramming(n: number) {
        const dp = [];

        dp[0] = 0;
        dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}

/**
 * 一直青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 *
 * 思路:
 *  跳三级台阶等于跳两级台阶的跳法+跳一级台阶的跳法。
 *  跳四级台阶等于跳三级台阶+跳二级台阶的跳法。
 *
 *  符合斐波那契数列的规律
 */

function jumpFloor(n: number) {
    if (n <= 2) return n;
    return jumpFloor(n - 1) + jumpFloor(n - 2);
}

function jumpFloorDP(n: number) {
    if (n <= 2) return n;
    let result = 0;
    let jump1 = 1;
    let jump2 = 2;
    for (let i = 3; i <= n; i++) {
        result = jump1 + jump2;
        jump1 = jump2;
        jump2 = result;
    }
    return result;
}

/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠的覆盖一个2*n的大矩形，总共有多少种方法？
 *
 * 例如 [# #]表示横向2*1
 *      |#|
 *      |#|表示竖向1*2
 *
 * 第n-2项 第n-1项   第n项
 *  |#|    |#|#|️  |#|#|️#|
 *  |#|    |#|#|  |#|#|#|
 *
 *         [# #]  [# #]|️#|
 *         [# #]  [# #]|️#|
 *
 *                |️#|[# #]
 *                |️#|[# #]
 */

function rectCover(n: number) {
    if (n <= 2) return n;
    let i = 2;
    let pre = 1;
    let current = 2;
    let result = 0;
    while (i++ < n) {
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}
