const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];

/**
 * Write your code below!
 */
let firstIndex = 0;
for (let i = 1; i < array.length; i++){
    if (array[0] === array[i]) {
        firstIndex = i;
        break;
    }
}
return firstIndex;
}
let result = indexOfRepeatedValue(numbers);
console.log(result);
