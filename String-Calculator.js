function add(numbers) {
    // Ensure the input is a string
    if (typeof numbers !== 'string') {
        throw new TypeError('Input should be a string');
    }

    // Return 0 for an empty string
    if (numbers === '') return 0;

    let delimiter = /,|\n/; // Default delimiters: comma and newline

    // Check for custom delimiter syntax at the beginning of the string
    if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.slice(2, delimiterEndIndex));
        numbers = numbers.slice(delimiterEndIndex + 1);
    }

    // Split the input string by the determined delimiter
    const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    // Filter out negative numbers
    const negatives = numberArray.filter(num => num < 0);

    // Throw an error if there are any negative numbers
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    // Calculate and return the sum of the numbers
    return numberArray.reduce((sum, num) => sum + num, 0);
}

const ans = add("1,2,3,-5") // pass the string here
console.log(ans); // Final output
