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

body {
    background-image: url('day-sun-weather-app-screen-mobile-interface-design-forecast-background-time-concept-vector-banner-260952656.jpg'); /* Local image file */
    background-size: cover; /* Makes the image cover the entire page */
    background-position: center center; /* Centers the background image */
    background-attachment: fixed; /* Keeps the background image fixed while scrolling */
    font-family: Arial, sans-serif;
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent background for readability */
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.weather-card h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

#weather-info {
    margin-top: 20px;
    display: none;
}

#weather-info h3 {
    font-size: 20px;
    margin: 10px 0;
}

#weather-info p {
    font-size: 16px;
    margin: 5px 0;
}

