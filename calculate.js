// Function to calculate the factorial of a number
function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Test cases
const numbers = [0, 1, 2, 3, 4, 5];

// Calculate and display the factorial for each test number
numbers.forEach(number => {
    console.log(`Factorial of ${number} is:`, factorial(number));
});
