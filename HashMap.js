import java.util.HashMap;

public class HashMapContainsKeyExample {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("one", 1);
        map.put("two", 2);
        map.put("three", 3);
        String key = "two";
        if (map.containsKey(key)) {
            System.out.println("Key '" + key + "' exists in the HashMap.");
        } else {
            System.out.println("Key '" + key + "' does not exist in the HashMap.");
        }
    }
}
