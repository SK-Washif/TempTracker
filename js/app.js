const apiKey = `d71461c0ccb616606ebf8a384ba44c0f`;

const loadTemperature = city =>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayTemperature(data));
}

const displayTemperature = data =>{
  console.log(data.weather[0].main);
  const temperature = document.getElementById('temperature');
  temperature.innerText = data.main.temp;
  
  const condition = document.getElementById('condition');
  condition.innerText = data.weather[0].main;
   

}

document.getElementById('btn-search').addEventListener('click', function(){
  const inputField = document.getElementById('input-field');
  const city = inputField.value;
  document.getElementById('cty').innerText = city;
  loadTemperature(city);
})


//loadTemperature('Dhaka');



