let input = document.getElementById('input')
let button = document.getElementById('button')
let freespace = document.getElementById('space')
let themeButto = document.getElementById('wbutton')
let welcometext = document.getElementById('welcome-text')

function getCityName(){

let fetchingData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=599c3ac16baaa0223e348843860f7603`)
    .then(resp => resp.json())
    .then(data => freespace.innerHTML = `Right now ${Math.floor(data['main']['temp'])}°C in ${input.value}`);

}

themeButto.onclick = () =>{
    document.body.classList.toggle('white')
}


button.addEventListener('click', getCityName)
