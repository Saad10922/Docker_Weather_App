const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 5000;

const API_KEY = 'a4e234f06ac906ed2817f35f306e6283';

app.use(express.json());

// Endpoint to get weather data
app.get('/api/weather', async (req, res) => {
    const { lat, lon } = req.query;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

app.get('/weather', (req, res) => {
    res.json({ message: 'Weather API is working!' });
  });
  
  // Root route
  app.get('/', (req, res) => {
    res.send('Welcome to the Weather API!');
  });
  

app.listen(PORT, () => console.log(`Weather API service running on port ${PORT}`));
