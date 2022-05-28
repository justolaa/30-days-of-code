let progressbar = document.querySelector(".progressbar");
let slider = document.querySelector(".Slider");
let Selector = document.getElementById("Selector");
let bills = document.querySelector("h4");
let bills2 = document.querySelector("h3");
let yearlybilling= document.querySelector(".Yearly-billing");
let MonthlybillingToggle = document.querySelector(".Monthly-billingToggle");
let discount = document.querySelector(".discount");


slider.addEventListener('input', function () {
    progressbar.style.width = this.value + "rem"; 
    if (this.value==8) {
        bills.textContent = "$" + this.value + ".00";
        bills2.textContent = "10K PAGEVIEWS";
    }
    if (this.value==12) {
        bills.textContent = "$" + this.value + ".00";
        bills2.textContent = "50K PAGEVIEWS";
    }
    if (this.value==16) {
        bills.textContent = "$" + this.value + ".00";
        bills2.textContent = "100K PAGEVIEWS";
    }
    if (this.value==18) {
        bills.textContent = "$24.00";
        bills2.textContent = "500K PAGEVIEWS";
    }
    if (this.value==20) {
        bills.textContent = "$36.00";
        bills2.textContent = "1M PAGEVIEWS" ;
    }
});

    
    


function Animatedtoggle(){
    MonthlybillingToggle.classList.toggle("active");
  if(MonthlybillingToggle.background="hsl(174, 77%, 80%)"){
        slider.addEventListener('input', function () {
            progressbar.style.width = this.value + "rem"; 
            if (this.value==8) {
                bills.textContent = "$" + this.value*0.25 + ".00";
                bills2.textContent = "10K PAGEVIEWS";
            }
            if (this.value==12) {
                bills.textContent = "$" + this.value*0.25 + ".00";
                bills2.textContent = "50K PAGEVIEWS";
            }
            if (this.value==16) {
                bills.textContent = "$" + this.value*0.25 + ".00";
                bills2.textContent = "100K PAGEVIEWS";
            }
            if (this.value==18) {
                bills.textContent = "$6.00";
                bills2.textContent = "500K PAGEVIEWS";
            }
            if (this.value==20) {
                bills.textContent = "$9.00";
                bills2.textContent = "1M PAGEVIEWS" ;
            }
        })} else if(MonthlybillingToggle.background="hsl(223, 50%, 87%)"){
            slider.addEventListener('input', function () {
                progressbar.style.width = this.value + "rem"; 
                if (this.value==8) {
                    bills.textContent = "$" + this.value + ".00";
                    bills2.textContent = "10K PAGEVIEWS";
                }
                if (this.value==12) {
                    bills.textContent = "$" + this.value + ".00";
                    bills2.textContent = "50K PAGEVIEWS";
                }
                if (this.value==16) {
                    bills.textContent = "$" + this.value + ".00";
                    bills2.textContent = "100K PAGEVIEWS";
                }
                if (this.value==18) {
                    bills.textContent = "$24.00";
                    bills2.textContent = "500K PAGEVIEWS";
                }
                if (this.value==20) {
                    bills.textContent = "$36.00";
                    bills2.textContent = "1M PAGEVIEWS" ;
                }
            }) 
         };};




document.addEventListener("DOMContentLoaded", (e)=> {
    window.onresize = function () {
        if (window.innerWidth <= 500) {
            discount.innerHTML = "-25%";
        }
        else{
            discount.innerHTML = "25%discount";
        }
    }
} )