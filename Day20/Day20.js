let toggleSwitch = document.querySelector(".Toggle-button");
let body1 = document.querySelector("body");
let Toggle1 = document.querySelector(".Toggle");
let container1 = document.querySelector(".container");
let display = document.querySelector(".display");
let Equal1 =document.querySelector(".Equal");
let Del1 = document.querySelector(".Del");
let Reset1 = document.querySelector(".Reset");

let body2 = document.querySelector("body");
let Toggle2 = document.querySelector(".Toggle");
let container2 = document.querySelector(".container");
let Equal2 =document.querySelector(".Equal");
let Del2 = document.querySelector(".Del");
let Reset2 = document.querySelector(".Reset");
let text = document.querySelector(".text");
let Numbers = document.querySelector(".Numbers");
let Theme = document.querySelector(".Theme");

let body3 = document.querySelector("body");
let Toggle3 = document.querySelector(".Toggle");
let container3 = document.querySelector(".container");
let Equal3 =document.querySelector(".Equal");
let Del3 = document.querySelector(".Del");
let Reset3 = document.querySelector(".Reset");
let content= document.querySelector(".content");

let buttons = Array.from(document.querySelectorAll("button"));
buttons.map(button => {
    button.addEventListener('click', (e)=> {
        switch (e.target.innerText) {
            case 'RESET':
                content.innerText = '';
                break;

            case 'DEL':
                if(content.innerText){
                    content.innerText = content.innerText.slice(0, -1);
                }
                break;

            case '=':
                try {
                    content.innerText= eval(content.innerText);
                } catch (error) {
                    content.innerText= "ERROR";
                }
                
                break;

            default: content.innerText += e.target.innerText;
                
        }
    })
})


function go_to_1() {
    toggleSwitch.classList.add("horizTranslate1");
    toggleSwitch.classList.remove("horizTranslate2");
    toggleSwitch.classList.remove("horizTranslate3");
    body1.classList.add("body1");
    Toggle1.classList.add("Toggle1");
    container1.classList.add("container1");
    Equal1.classList.add("Equal1");
    Del1.classList.add("Del1");
    Reset1.classList.add("Reset1");
   

    body2.classList.remove("body2");
    Toggle2.classList.remove("Toggle2");
    container2.classList.remove("container2");;
    Equal2.classList.remove("Equal2");
    Del2.classList.remove("Del2");
    Reset2.classList.remove("Reset2");

    body3.classList.remove("body3");
    Toggle1.classList.remove("Toggle3");
    container3.classList.remove("container3");
    Equal3.classList.remove("Equal3");
    Del3.classList.remove("Del3");
    Reset3.classList.remove("Reset3");

    text.style.color = "white";
    Numbers.style.color = "white";
    Theme.style.color="white";
    display.style.backgroundColor="hsl(224, 36%, 15%)";
    content.style.color="white";
    

    const nodeList = document.querySelectorAll("button");
    for (let i= 0; i < nodeList.length; i++) {
        nodeList[i].style.color ="hsl(221, 14%, 31%)";
        nodeList[i].style.backgroundColor ="white";
        nodeList[17].style.backgroundColor="hsl(6, 63%, 50%)";
        nodeList[17].style.color="white";
        
        if(i==3 || i==16 ){
            nodeList[i].style.backgroundColor = "hsl(225, 21%, 49%)";
            nodeList[i].style.backgroundColor = "hsl(225, 21%, 49%)";
            nodeList[i].style.color = "white";
            nodeList[i].style.color = "white";
        }
    }
}

function go_to_2() {
    toggleSwitch.classList.add("horizTranslate2");
    toggleSwitch.classList.remove("horizTranslate1");
    toggleSwitch.classList.remove("horizTranslate3");
    body2.classList.add("body2");
    Toggle2.classList.add("Toggle2");
    container2.classList.add("container2");
    Equal2.classList.add("Equal2");
    Del2.classList.add("Del2");
    Reset2.classList.add("Reset2");
    

    body1.classList.remove("body1");
    Toggle1.classList.remove("Toggle1");
    container1.classList.remove("container1");
    Equal1.classList.remove("Equal1");
    Del1.classList.remove("Del1");
    Reset1.classList.remove("Reset1");

    body3.classList.remove("body3");
    Toggle1.classList.remove("Toggle3");
    container3.classList.remove("container3");
    Equal3.classList.remove("Equal3");
    Del3.classList.remove("Del3");
    Reset3.classList.remove("Reset3");

    text.style.color = "black";
    Numbers.style.color = "black";
    Theme.style.color="black";
    display.style.backgroundColor="hsl(0, 0%, 93%)";
    content.style.color= "hsl(60, 10%, 19%)";

   
    const nodeList = document.querySelectorAll("button");
    for (let i= 0; i < nodeList.length; i++) {
        nodeList[i].style.color ="hsl(60, 10%, 19%)";
        nodeList[i].style.backgroundColor="white";
        nodeList[17].style.backgroundColor="hsl(25, 98%, 40%)";
        if(i==3 || i==16 || i==17){
            nodeList[i].style.color = "white";
            nodeList[16].style.backgroundColor=" hsl(185, 42%, 37%)";
            nodeList[3].style.backgroundColor=" hsl(185, 42%, 37%)";
        }
    }
   
}

function go_to_3() {
    toggleSwitch.classList.add("horizTranslate3");
    toggleSwitch.classList.remove("horizTranslate1");
    toggleSwitch.classList.remove("horizTranslate2");
    body3.classList.add("body3");
    Toggle3.classList.add("Toggle3");
    container3.classList.add("container3");
    Equal3.classList.add("Equal3");
    Del3.classList.add("Del3");
    Reset3.classList.add("Reset3");
    

    body1.classList.remove("body1");
    Toggle1.classList.remove("Toggle1");
    container1.classList.remove("container1");
    Equal1.classList.remove("Equal1");
    Del1.classList.remove("Del1");
    Reset1.classList.remove("Reset1");

    body2.classList.remove("body2");
    Toggle2.classList.remove("Toggle2");
    container2.classList.remove("container2");
    Equal2.classList.remove("Equal2");
    Del2.classList.remove("Del2");
    Reset2.classList.remove("Reset2");

    text.style.color = "hsl(52, 100%, 62%)";
    Numbers.style.color = "hsl(52, 100%, 62%)";
    Theme.style.color="hsl(52, 100%, 62%)";
    display.style.backgroundColor= "hsl(268, 71%, 12%)";
    content.style.color= "hsl(52, 100%, 62%)";
   
    const nodeList = document.querySelectorAll("button");
    for (let i= 0; i < nodeList.length; i++) {
        nodeList[i].style.color ="hsl(52, 100%, 62%)";
        nodeList[i].style.backgroundColor ="hsl(281, 89%, 26%)";
        nodeList[17].style.backgroundColor="hsl(176, 100%, 44%)";
        nodeList[17].style.color="hsl(198, 20%, 13%)";
        
        if(i==3 || i==16){
            nodeList[i].style.color = "white";
        }
    }
}

