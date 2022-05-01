let integer = 15;
let numArr = [];

function correct(integer) {

for (let i = 1; i <= integer; i++) {
    numArr[i] = i;

    if (   i % 3 === 0 && i % 5 === 0) {
        numArr[i] = "FizzBuzz";
    }
    else if(i % 5 === 0){
        numArr[i] = "Buzz";
    }
    else if(i % 3 === 0){
        numArr[i] = "Fizz";
    } 
}
    return numArr;
}
console.log(correct(integer));


