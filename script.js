const apiKey = "f7d84c06cebffedba8c2ff1e8dbebab8"; // <-- Replace this with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temperature").textContent = Math.round(data.main.temp);
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;

      document.getElementById("weatherResult").classList.remove("hidden");
    })
    .catch(error => {
      alert(error.message);
    });
}
