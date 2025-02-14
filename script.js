function firstNonRepeatedChar(str)
	{
     const ct = {};
    // Count occurrences of each character
    for (const ch of str) {
        ct[ch] = (ct[ch] || 0) + 1;
    }

    // Find first non-repeating character
    for (const ch of str) {
        if (ct[ch] === 1) {
            return ch;
        }
    }
    return null;
}

// Get user input
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
