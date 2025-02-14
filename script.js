function firstNonRepeatedChar(str) {
 
    const ct = {};

    // Count occurrences of each character
    for (const ch of str) {
        cct[ch] = (ct[ch] || 0) + 1;
    }

    // Find first non-repeating character
    for (const ch of str) {
        if (charCount[ch] === 1) {
            return ch;
        }
    }

    return "No non-repeating character found";
}

// Get user input
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
