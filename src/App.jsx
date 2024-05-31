import React, { useState } from 'react';
import Weather from './components/Weather';
import './App.css';

const App = () => {
  const [city, setCity] = useState('London');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <h5>¡Enter your destiny!</h5>
      <h6><i>*Weather data provided by: <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a></i></h6>
      <input 
        type="text" 
        value={city} 
        onChange={handleCityChange} 
        placeholder="Enter a city:"
      />
      <div className="container">
        <Weather city={city} />
      </div>
      <p>*Made with ❤️ by::: <a href="https://github.com/inmerzorrilla2" target="_blank">Inmer Zorrilla</a></p>
    </div>
  );
};

export default App;
