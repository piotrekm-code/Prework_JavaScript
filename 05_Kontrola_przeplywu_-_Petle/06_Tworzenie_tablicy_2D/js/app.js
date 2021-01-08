const numbers = [];
const columns = 4;
const rows = 5;

/**
 * Write your code below!
 */

for (let i = 0; i < rows; i++) {
    numbers[i] = [];
    for (let number = 0; number < columns; number++) {
        numbers[i][number] = (i * columns) + number + 1;
    }
}
console.log(numbers);