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
