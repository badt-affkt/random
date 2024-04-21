import java.math.BigInteger;

public class PrimeNumberCheckBigInteger {
    public static void main(String[] args) {
        BigInteger number = new BigInteger("17");
        if (number.isProbablePrime(1)) {
            System.out.println(number + " is probably a prime number.");
        } else {
            System.out.println(number + " is not a prime number.");
        }
    }
}
