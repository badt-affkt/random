// Function to find the longest word in a sentence
function findLongestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Initialize variables to store the longest word and its length
    let longestWord = '';
    let maxLength = 0;

    // Iterate through each word in the array
    for (let word of words) {
        // Remove non-alphanumeric characters from the word
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        // Update the longest word and its length if the current word is longer
        if (cleanWord.length > maxLength) {
            longestWord = cleanWord;
            maxLength = cleanWord.length;
        }
    }

    return longestWord;
}

// Test case
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Longest word in the sentence:", findLongestWord(sentence));
