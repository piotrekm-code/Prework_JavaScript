const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];

/**
 * Write your code below!
 */
function maxFromArray(numbers){
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}
let result = maxFromArray(randomNumbers);
console.log(result);