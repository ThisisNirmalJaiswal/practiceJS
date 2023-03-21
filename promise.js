function sumDigits(number) {
    return new Promise((resolve, reject) => {
        // Check if input is a number
        if (typeof number !== 'number' || isNaN(number)) {
            reject('Invalid input, please provide a valid number');
        } else {
            // Convert number to string and split into an array of digits
            // const digits = number.toString().split('');
            // // console.log(digits)
            // // Calculate the sum of digits using reduce()
            // const sum = digits.map(Number).reduce((acc, curr) => acc + curr);
            sum = 0;
            while (number) { //123
                sum += number % 10; //123%
                number = Math.floor(number / 10);
            }
            resolve(sum);
        }
    });
}

sumDigits(123)
    .then((sum) => console.log(sum)) // prints 6 (1 + 2 + 3)
    .catch((error) => console.error(error));

sumDigits('abc')
    .then((sum) => console.log(sum))
    .catch((error) => console.error(error)); // prints "Invalid input, please provide a valid number"
