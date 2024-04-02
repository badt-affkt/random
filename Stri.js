import java.util.StringTokenizer;

public class StringTokenizerExample {
    public static void main(String[] args) {
        String sentence = "Java is a programming language";
        StringTokenizer tokenizer = new StringTokenizer(sentence);
        System.out.println("Number of tokens: " + tokenizer.countTokens());
        System.out.println("Tokens:");
        while (tokenizer.hasMoreTokens()) {
            System.out.println(tokenizer.nextToken());
        }
    }
}
