const n = 3;
const calc = [];

/**
 * Write your code below!
 */

for (let i = 0; i < n; i++){
    calc [i] = [];
    for (let number = 0; number < n; number++){
        a = (number + 1) + " x " + (i +1) + " = " + (number + 1) * (i + 1) + " |";
        calc [i][number] = a;
    }
}
console.log(calc);