import java.security.SecureRandom;

public class PasswordGenerator {
    private static final String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String CHAR_UPPER = CHAR_LOWER.toUpperCase();
    private static final String NUMBER = "0123456789";
    private static final String OTHER_CHAR = "!@#$%&*()_+-=[]?";

    private static final String PASSWORD_ALLOW_BASE = CHAR_LOWER + CHAR_UPPER + NUMBER + OTHER_CHAR;

    private static SecureRandom random = new SecureRandom();

    public static void main(String[] args) {
        System.out.println(generateRandomPassword(12));
    }

    public static String generateRandomPassword(int length) {
        if (length < 4) throw new IllegalArgumentException("Password length must be at least 4 characters");

        StringBuilder password = new StringBuilder(length);

        password.append(randomChar(CHAR_LOWER));
        password.append(randomChar(CHAR_UPPER));
        password.append(randomChar(NUMBER));
        password.append(randomChar(OTHER_CHAR));

        for (int i = 0; i < length - 4; i++) {
            password.append(randomChar(PASSWORD_ALLOW_BASE));
        }

        return password.toString();
    }

    private static char randomChar(String characterSet) {
        int randomIndex = random.nextInt(characterSet.length());
        return characterSet.charAt(randomIndex);
    }
}
