// Function to find the greatest common divisor (GCD) of two numbers using the Euclidean algorithm
function gcd(a, b) {
    // Ensure a is greater than or equal to b
    if (a < b) {
        [a, b] = [b, a];
    }

    // Euclidean algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

// Test cases
const pairs = [
    [12, 18],
    [35, 49],
    [1071, 462],
    [64, 128]
];

// Calculate and display the GCD for each pair
pairs.forEach(pair => {
    const [num1, num2] = pair;
    console.log(`GCD of ${num1} and ${num2} is:`, gcd(num1, num2));
});
