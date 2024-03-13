// Function to generate a random password
function generatePassword(length) {
    // Define character set for the password
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    let password = "";
    
    // Generate random characters until the password reaches the desired length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    return password;
}

// Generate and display a random password with length 10
const passwordLength = 10;
const randomPassword = generatePassword(passwordLength);
console.log("Random Password:", randomPassword);
