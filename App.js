import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './weather';

const App = () => {
  const cities = ['Tokyo', 'Paris', 'Lisbon', 'New York', 'Colombia'];
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '24da1441bed1fc9afe4269790801b66e';
      const requests = cities.map(city =>
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      );
      const responses = await Promise.all(requests);
      const data = responses.map(response => response.data);
      setWeatherData(data);
    };

    fetchData();
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = async () => {
    const apiKey = '24da1441bed1fc9afe4269790801b66e';
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=${apiKey}`);
    const data = response.data;
    setWeatherData([data]);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-bar">
        <input type="text" placeholder="Enter city name" value={selectedCity} onChange={handleCityChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData.map((data, index) => (
        <Weather key={index} city={data.name} weatherData={data} />
      ))}
    </div>
  );
};

export default App;
