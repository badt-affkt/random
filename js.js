// Define a function to calculate the factorial of a number
function factorial(n) {
    // Factorial of 0 is always 1
    if (n === 0) {
        return 1;
    }
    // Recursive calculation of factorial
    return n * factorial(n - 1);
}

// Get user input for the number to calculate factorial
let num = parseInt(prompt("Enter a number to calculate its factorial:"));

// Calculate and display the factorial
if (!isNaN(num) && num >= 0) {
    let result = factorial(num);
    console.log("Factorial of", num, "is", result);
} else {
    console.log("Invalid input. Please enter a non-negative integer.");
}
