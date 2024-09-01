// Initialize an empty array
let stringArray = [];

// Function to add a string to the array
function addString(newString) {
    // Check if the string is already in the array
    if (stringArray.includes(newString)) {
        console.log('"' + newString + '" already exits.');
    } else {
        // Add the string to the array if not present
        stringArray.push(newString);
        console.log(`"${newString}" added to the array.`);
    }

    // Sort the array in alphabetical order
    stringArray.sort();

    // Print the array
    console.log("Array in alphabetical order:", stringArray);

    // Print the length of the array
    console.log("Length of the array:", stringArray.length);
}

// Example usage
addString("apple");
addString("banana");
addString("apple"); // Duplicate, will not be added
addString("cherry");
addString("banana"); // Duplicate, will not be added
addString("date");
addString("Elephant");
addString("elephant")  // Duplicate, will not be added
