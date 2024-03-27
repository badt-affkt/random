// Generate a random number between 0 and 1
const randomNumber = Math.random();
console.log("Random number between 0 and 1:", randomNumber);

// Generate a random integer between min (included) and max (excluded)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Example usage: generate a random integer between 1 and 100
const randomInteger = getRandomInt(1, 101);
console.log("Random integer between 1 and 100:", randomInteger);
