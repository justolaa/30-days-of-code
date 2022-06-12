document.getElementById("Dice").addEventListener('click', getAdvise);

function getAdvise() {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data)=> {
        let output = '';
        Array.from(data).forEach(function(post) {
            output+= 
            `<div>
               <p>${post.slip.advice}</p> 
               </div>`
    
            });
        document.getElementById('Quote').innerHTML= ' &#8220; ' + data.slip.advice + ' &#8221;';
        document.querySelector('.AdviceId').innerHTML= "A D V I C E #"+data.slip.id;
        console.log(data);
    })
}
