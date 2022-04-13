/* Initialise them */
const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

/* Add event listener to the button */

generateJoke();

get_joke.addEventListener('click',generateJoke);

async function generateJoke(){
    /* this async function calls the Icanhaz API */

    const jokeRes = await fetch('https://icanhazdadjoke.com/', 
    {
        headers:{
            accept: 'application/json' /* accepts a json return 4rm API */
        }
    })

    const joke = await jokeRes.json();
    //console.log(joke);

    /* setting it to inner html */
    jokeEl.innerHTML = joke.joke;
}