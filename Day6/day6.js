let array = [1, 2, 3]
let target = 9; 

function correct (array, target) {
    let indexes = [];
    let error = [];
    for(let i= 0; i < array.length; i++)
    {
for (let j = i + 1; j < array.length; j++) {
    
    if (array[i] + array[j] === target) {
        return [i, j]
    }
    else{
        error.push= [-1, -1];
        return error;
    }
    
}
    }
    return null;
}
console.log(correct(array,target));