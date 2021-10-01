// API key from GIPHY
const myKey = '0zsg4Sw12qD8t6wIVof6XymzwuawICwJ';

// event listener to wait until the page is loaded
document.addEventListener('DOMContentLoaded', theFetch);

function theFetch(){
    document.getElementById('Btn').addEventListener('click', dontRefresh => {
        dontRefresh.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&limit=25&q=`;
        let userInput = document.getElementById('search').value;
        url = url.concat(userInput);
        
        fetch(url)
        .then(response => response.json() )
        .then(content => {
            let box = document.createElement('box');
            let img = document.createElement('img');

            for(i = 0; i <= 24; i++){
            img.src = content.data[i].images.original.url;
            console.log(img.src)
           
            box.appendChild(img);}
            
            let output = document.querySelector('.output');
            output.style.border = '1px solid black';
            output.insertAdjacentElement('afterbegin', box);
        })
    })
}
