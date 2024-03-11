// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

// Function to generate a random quote
function generateRandomQuote() {
    // Generate a random index within the range of the quotes array length
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Return the randomly selected quote
    return quotes[randomIndex];
}

// Generate and display a random quote
const randomQuote = generateRandomQuote();
console.log("Random Quote:", randomQuote);
