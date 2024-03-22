function generatePassword(length = 10, options = { uppercase: true, lowercase: true, numbers: true, symbols: true }) {
    const charset = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()-_=+'
    };

    let password = '';
    let selectedCharset = '';

    for (let option in options) {
        if (options[option]) {
            selectedCharset += charset[option];
        }
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectedCharset.length);
        password += selectedCharset[randomIndex];
    }

    return password;
}

// Test the function
const password = generatePassword(12, { uppercase: true, lowercase: true, numbers: true, symbols: true });
console.log("Generated Password:", password);
