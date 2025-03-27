const fetch = require('node-fetch');

const API_KEY = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Fetch weather data for a given city.
 * @param {string} city - The name of the city.
 * @returns {Promise<object>} - The weather data.
 */
async function getWeatherByCity(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Test cases
(async () => {
    try {
        console.log('Fetching weather for London...');
        const londonWeather = await getWeatherByCity('London');
        console.log('London Weather:', londonWeather);

        console.log('Fetching weather for New York...');
        const newYorkWeather = await getWeatherByCity('New York');
        console.log('New York Weather:', newYorkWeather);

        console.log('Fetching weather for an invalid city...');
        await getWeatherByCity('InvalidCityName');
    } catch (error) {
        console.error('Test case error:', error.message);
    }
})();
