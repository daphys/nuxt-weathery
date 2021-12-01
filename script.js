
let input = document.getElementById('input')
let button = document.getElementById('button')
let freespace = document.getElementById('space')

function getCityName(){

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=599c3ac16baaa0223e348843860f7603`)
    .then((resp) => resp.json()).then((data) => freespace.innerHTML = `${Math.floor(data['main']['temp'])}° in ${input.value}`);

}

button.addEventListener('click', getCityName)
