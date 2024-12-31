document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherData(location);
    } else {
        alert('Please enter a location');
    }
}

function fetchWeatherData(location) {
    const apiKey = '5fb0a15d685454afffb0ab274ec200b8';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;


    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeatherData(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    if (data.cod === 200) {
        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        weatherInfo.innerHTML = `<p>${data.message}</p>`;
    }
}