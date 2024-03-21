// Function to reverse a string
function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return str.split('').reverse().join('');
}

// Test cases
const strings = ["hello", "world", "javascript", "example"];

// Reverse each string and display the result
strings.forEach(str => {
    console.log(`Original: ${str}, Reversed: ${reverseString(str)}`);
});
