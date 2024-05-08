public class SumOfNaturalNumbers {
    public static void main(String[] args) {
        int n = 5;
        int sum = 0;
        for (int i = 1; i <= n; ++i) {
            sum += i;
        }
        System.out.println("Sum of first " + n + " natural numbers = " + sum);
    }
}
