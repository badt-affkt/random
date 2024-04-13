public class ArrayAverage {
    public static void main(String[] args) {
        int[] array = {10, 20, 30, 40, 50};
        double sum = 0;
        for (int num : array) {
            sum += num;
        }
        double average = sum / array.length;
        System.out.println("Average of array elements: " + average);
    }
}
