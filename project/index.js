// const carousel = new bootstrap.Carousel('#myCarousel');

function Button() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a00727d195msh12aebc5b2cd51d9p1bab13jsn8b1537a00bde',
            'X-RapidAPI-Host': 'love-quote.p.rapidapi.com'
        }
    };
    
    fetch('https://love-quote.p.rapidapi.com/lovequote', options)
    .then((res) => res.json())
    .then((data)=> {
        Array.from(data).forEach(function(post) {
            console.log(data);
    
            });

            try {
                document.querySelector('.quote').innerHTML= data.quote
            document.querySelector('.Author').innerHTML= data.author
            console.log(data);

            if (data.title ) {
                document.querySelector('.quote').innerHTML= data.title;
            }

            if (data.author == UNKNOWN) {
                document.querySelector('.Author').innerHTML= "Someones Son";
            }

            } catch (error) {
                document.querySelector('.quote').innerHTML= "Server Error. Click Again Adefikayo!"
            }
            
            
    })
}



  


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a00727d195msh12aebc5b2cd51d9p1bab13jsn8b1537a00bde',
// 		'X-RapidAPI-Host': 'love-quote.p.rapidapi.com'
// 	}
// };

// fetch('https://love-quote.p.rapidapi.com/lovequote', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));