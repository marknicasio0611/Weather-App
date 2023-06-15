function getWeather() {
    
    var weatherData = {

      location: "Philippines",
      temperature: "32°C",
      description: "Partly sunny"
    };

    var locationElement = document.getElementById("location");
    var temperatureElement = document.getElementById("temperature");
    var descriptionElement = document.getElementById("description");

    locationElement.textContent = weatherData.location;
    temperatureElement.textContent = weatherData.temperature;
    descriptionElement.textContent = weatherData.description;
  }