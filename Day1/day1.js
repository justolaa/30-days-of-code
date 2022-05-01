let array = [1,2,3,4]
let sum = 0;
function SumOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(SumOfArray(array));