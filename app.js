fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector(
      ".icon"
    ).innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0]["icon"]}.png">`;
    document.querySelector(".vel-1").textContent = data.main.temp;
    document.querySelector(".vel-2").textContent = data.main.pressure;
    document.querySelector(".vel-3").textContent =
      data.weather[0]["description"];
    document.querySelector(".vel-4").textContent = data.main.humidity;
    document.querySelector(".vel-5").textContent = data.wind.speed;
    document.querySelector(".vel-6").textContent = data.wind.deg;
    data.name = "Kryvyi Rih";
  });
