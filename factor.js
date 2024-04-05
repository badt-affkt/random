public class Factorial {
    public static void main(String[] args) {
        int n = 5;
        long factorial = factorial(n);
        System.out.println("Factorial of " + n + ": " + factorial);
    }

    public static long factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
}
