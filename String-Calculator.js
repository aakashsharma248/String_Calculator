function add(numbers) {
    // Ensure the input is a string
    if (typeof numbers !== 'string') {
        throw new TypeError('Input should be a string');
    }

    // Return 0 for an empty string
    if (numbers === '') return 0;

    let delimiter = /,|\n/; // Default delimiters: comma and newline

    // Split the input string by the determined delimiter
    const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));


    // Calculate and return the sum of the numbers
    return numberArray.reduce((sum, num) => sum + num, 0);
}

const ans = add("1,2,3,-5") // pass the string here 
console.log(ans); // Final output
