// Function to reverse a string
function reverseString(str) {
    // Convert the string to an array, reverse it, and then join it back into a string
    return str.split('').reverse().join('');
}

// Test cases
const strings = ["hello", "world", "JavaScript", "OpenAI"];

// Reverse each string and display the result
strings.forEach(str => {
    console.log(`Original string: ${str}, Reversed string: ${reverseString(str)}`);
});
