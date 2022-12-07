
  fetch('http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(function(resp) {return resp.json()})
  .then(function(data) {
    console.log(data);
    document.querySelector('.temp').textContent = data.main.temp;
    document.querySelector('.pressure').textContent = data.main.pressure;
    document.querySelector('.description').textContent = data.weather[0]['description'];
    document.querySelector('.humidity').textContent = data.main.humidity;
    document.querySelector('.speed').textContent = data.wind.speed;
    document.querySelector('.deg').textContent = data.wind.deg;
    document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0]['icon']}.png">`;
  })
  .catch(function() {

  })

  
