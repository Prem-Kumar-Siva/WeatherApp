import React from 'react';
import './style.css';

const WeatherCard = ({ data, onClose }) => {
  return (
    <div className="weather-card">
      <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>{data.name}</h2>
      <p>Temperature: {Math.round(data.main.temp - 273.15)}°C 🌡</p>
      <p>Weather: {data.weather[0].main}</p>
      {/* Add more details as needed */}
      <button className='button' onClick={onClose}>Close</button>
    </div>
  );
};

export default WeatherCard;
