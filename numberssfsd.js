public class WhileLoopExample {
    public static void main(String[] args) {
        int i = 1, sum = 0;
        while (i <= 10) {
            sum += i;
            ++i;
        }
        System.out.println("Sum of numbers from 1 to 10 = " + sum);
    }
}
