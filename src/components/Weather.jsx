import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/weather.css';

const API_KEY = 'b390bf9259ec5a75901b41e9d33bfef2'; // Reemplaza con tu clave de API

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric');

  useEffect(() => {
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener datos del clima:', error);
        });
    }
  }, [city, unit]);


  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  if (!weatherData) {
    return <p>Cargando datos del clima...</p>;
  }

  const { name, main, weather } = weatherData;

 
    return (
      <div>
        <div className="weather">
          <h3>Weather conditions in: <span className="city">{name}</span></h3>
          <p className="weather-info">
            <span className="label">Temperature:</span> {main.temp}°{unit === 'metric' ? 'C' : 'F'}
          </p>
          <p className="weather-info">
            <span className="label">Description:</span> {weather[0].description}
          </p>
        </div>
    
        <label>
          <input 
            type="radio" 
            value="metric" 
            checked={unit === 'metric'} 
            onChange={handleUnitChange} 
          />
          Celsius
        </label>
        <label>
          <input 
            type="radio" 
            value="imperial" 
            checked={unit === 'imperial'} 
            onChange={handleUnitChange} 
          />
          Fahrenheit
        </label>
      </div>
    );
    
};

export default Weather;
