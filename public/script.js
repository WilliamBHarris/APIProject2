// API key from GIPHY
const myKey = '0zsg4Sw12qD8t6wIVof6XymzwuawICwJ';
const prevNav = document.querySelector('.prevNav');
const nextNav = document.querySelector('.nextNav');

// event listener to wait until the page is loaded
document.addEventListener('DOMContentLoaded', theFetch);

function theFetch(){
    document.getElementById('Btn').addEventListener('click', dontRefresh => {
        dontRefresh.preventDefault();

        let url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&limit=25&q=`;
        let userInput = document.getElementById('search').value;
        url = url.concat(userInput);
        let output = document.querySelector('.output');

        fetch(url)
        .then(response => response.json() )
        .then(images => {
            while(output.firstChild){
                output.removeChild(output.firstChild);
            }
            if(images.data.length === 0) {
                output.innerText = ("No Results. Try searching for something else!");
            } else {
            for(let i = 0; i < images.data.length; i++){
            let img = document.createElement('img');
            let link = document.createElement('a');

            let imgLink = images.data[i].images.original.url;
            
       
            img.src = images.data[i].images.fixed_width_small.url;
            img.href = '#' + imgLink;  
                  
            
            output.appendChild(link);
            link.appendChild(img);
            
        
            link.href = imgLink;
            
            output.style.border = '1px solid black';}
            } 
        })
    })
}
