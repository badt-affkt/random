// Function to remove duplicates from an array while preserving the original order
function removeDuplicates(arr) {
    const uniqueArray = [];
    const seen = new Set();

    for (let item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
}

// Test case
const numbers = [1, 2, 3, 3, 4, 5, 5, 6, 6, 7];
console.log("Original array:", numbers);
console.log("Array with duplicates removed:", removeDuplicates(numbers));
