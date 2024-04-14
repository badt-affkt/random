public class StringSplit {
    public static void main(String[] args) {
        String str = "Java is a programming language";
        String[] words = str.split(" ");
        System.out.println("Number of words: " + words.length);
        System.out.println("Words:");
        for (String word : words) {
            System.out.println(word);
        }
    }
}
