let array1 = [1,3,4,5];
let array2 = [2,6,7,8,9,10];
array = array1.concat(array2);

function correct(array) {
    var done= false;
    while (!done) {
        done = true;
        for (let i = 1; i< array.length; i++) {

            if (array[i-1] > array[i]) {
                done = false;
                var temp = array[i-1]
                array[i-1] = array[i];
                array[i]= temp;
                
            }
        }    
    }
   
  return array;
}
console.log(correct(array));

