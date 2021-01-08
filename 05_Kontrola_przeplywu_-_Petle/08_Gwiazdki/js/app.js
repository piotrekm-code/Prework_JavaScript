const n = 5;

/**
 * Write your code below!
 */

for (let i = 0; i < n; i++){
    let result = "";
    for (let j = 0; j <= i; j++){
        result = result + "*";
    }
    console.log(result);
}