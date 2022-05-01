let Array = ["dam", "madam", "boy", "chicken", "carac"];
let Reverse = [];


function correct(Array) {
    for (let i = 0; i < Array.length; i++) {
        Reverse[i]= Array[i].split("").reverse().join("");

        if (Array[i] === Reverse[i]) {
            Reverse[i]= true;

        }
        else{
            Reverse[i]= false;
        }

    }
    return Reverse;
}
console.log(correct(Array));