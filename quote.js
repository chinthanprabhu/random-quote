var quoteGenerateButton = document.getElementById('ranQuote');
var quoteOutput = document.getElementById('output');

if(quoteGenerateButton) {
    quoteGenerateButton.addEventListener('click', getQuote);
}

function getQuote(){
    fetch('http://api.quotable.io/random')
    .then((res)=>res.json())
    .then((data)=>{
        quoteOutput.innerHTML = ` 
            <h1>${data.content}</h1>
            <p> - ${data.author}</p> 
        `;
    })
    
}

