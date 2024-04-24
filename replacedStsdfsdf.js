public class ReplaceFirstExample {
    public static void main(String[] args) {
        String str = "apple, apple, banana, apple, orange";
        String replacedStr = str.replaceFirst("apple", "X");
        System.out.println("Replaced string: " + replacedStr);
    }
}
