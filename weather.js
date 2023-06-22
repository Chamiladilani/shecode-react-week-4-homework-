import React from 'react';

const Weather = ({ city, weatherData }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
        />
        <p>{weatherData.weather[0].description}</p>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      </div>
      <p>Card by Chamila Dilani</p>
    </div>
  );
};

export default Weather;
