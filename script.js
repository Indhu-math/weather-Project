const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';  // Replace with your actual OpenWeather API key.
const url = 'https://api.openweathermap.org/data/2.5/weather';

async function weatherFn(cityName) {
    const tempUrl = `${url}?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(tempUrl);
        const data = await res.json();

        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('There was an issue fetching the weather data. Please try again later.');
    }
}

function weatherShowFn(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('date').textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    // Update weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weather-icon').src = iconUrl;

    document.getElementById('weather-info').style.display = 'block';
}
