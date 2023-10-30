//searchinput
//searchbtn

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b87c7a9681msh720445bcdd7f750p1391aajsn0f089bdbdde5',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }  
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
       .then(response => response.json())
       .then((response) => {
        
           wordheading.innerHTML =" Meaning of: " + response.word.replace;
           definition.innerHTML = response.definition("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
     
        })
         .catch(err => console.error(err));
}

searchbtn.addEventListener("Click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})