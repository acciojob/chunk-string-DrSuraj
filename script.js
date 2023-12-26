function chunkString(str, chunkLength) {
    // Check if the input string is null or empty
    if (str === null || str === '') {
        return [];
    }

    // Initialize an array to store the chunks
    const chunks = [];

    // Loop through the string and create chunks of the specified length
    for (let i = 0; i < str.length; i += chunkLength) {
        const chunk = str.substring(i, i + chunkLength);
        chunks.push(chunk);
    }

    return chunks;
}

// Examples
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));         // ["12", "34", "5"]
console.log(chunkString("abc", 5));           // ["abc"]
console.log(chunkString(null, 3));            // []
console.log(chunkString("", 4));              // []
