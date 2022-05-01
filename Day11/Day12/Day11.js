let container = document.querySelector('.container');
let container2 = document.querySelector('.container2')
let SubmitButton = document.querySelector('.Submit-Button');
let Ratings = document.querySelector('.Selection div')
let button1 = document.querySelector('.Ratings .button1');
let button2 = document.querySelector('.Ratings .button2');
let button3 = document.querySelector('.Ratings .button3');
let button4 = document.querySelector('.Ratings .button4');
let button5 = document.querySelector('.Ratings .button5');


button1.addEventListener('click', (e) => { 
    button1.style.backgroundColor = "hsl(25, 97%, 53%)";
    button2.style.backgroundColor = "hsl(213, 10%, 30%)";
    button3.style.backgroundColor = "hsl(213, 10%, 30%)";
    button4.style.backgroundColor = "hsl(213, 10%, 30%)";
    button5.style.backgroundColor = "hsl(213, 10%, 30%)";
    if (true) {
        SubmitButton.addEventListener('click', (e) => {
        container.style.display = "none";
        container2.style.visibility= "visible";
        document.querySelector('.Selection div').innerHTML = '<div>You selected 1 out of 5</div>';
       });
    };  
});

button2.addEventListener('click', (e) => { 
    button2.style.backgroundColor = "hsl(25, 97%, 53%)";
    button1.style.backgroundColor = "hsl(213, 10%, 30%)";
    button3.style.backgroundColor = "hsl(213, 10%, 30%)";
    button4.style.backgroundColor = "hsl(213, 10%, 30%)";
    button5.style.backgroundColor = "hsl(213, 10%, 30%)";
    if (true) {
        SubmitButton.addEventListener('click', (e) => {
        container.style.display = "none"
        container2.style.visibility= "visible";
        document.querySelector('.Selection div').innerHTML = '<div>You selected 2 out of 5</div>';
       });
    };  
});

button3.addEventListener('click', (e) => { 
    button3.style.backgroundColor = "hsl(25, 97%, 53%)";
    button1.style.backgroundColor = "hsl(213, 10%, 30%)";
    button2.style.backgroundColor = "hsl(213, 10%, 30%)";
    button4.style.backgroundColor = "hsl(213, 10%, 30%)";
    button5.style.backgroundColor = "hsl(213, 10%, 30%)";
    if (true) {
        SubmitButton.addEventListener('click', (e) => {
        container.style.display = "none"
        container2.style.visibility= "visible";
        document.querySelector('.Selection div').innerHTML = '<div>You selected 3 out of 5</div>';
       });
    };  
});

button4.addEventListener('click', (e) => { 
    button4.style.backgroundColor = "hsl(25, 97%, 53%)";
    button1.style.backgroundColor = "hsl(213, 10%, 30%)";
    button2.style.backgroundColor = "hsl(213, 10%, 30%)";
    button3.style.backgroundColor = "hsl(213, 10%, 30%)";
    button5.style.backgroundColor = "hsl(213, 10%, 30%)";
    if (true) {
        SubmitButton.addEventListener('click', (e) => {
        container.style.display = "none"
        container2.style.visibility= "visible";
        document.querySelector('.Selection div').innerHTML = '<div>You selected 4 out of 5</div>';
       });
    };  
});

button5.addEventListener('click', (e) => { 
    button5.style.backgroundColor = "hsl(25, 97%, 53%)";
    button1.style.backgroundColor = "hsl(213, 10%, 30%)";
    button2.style.backgroundColor = "hsl(213, 10%, 30%)";
    button3.style.backgroundColor = "hsl(213, 10%, 30%)";
    button4.style.backgroundColor = "hsl(213, 10%, 30%)";
    if (true) {
        SubmitButton.addEventListener('click', (e) => {
        container.style.display = "none"
        container2.style.visibility= "visible";
        document.querySelector('.Selection div').innerHTML = '<div>You selected 5 out of 5</div>';
       });
    };  
});