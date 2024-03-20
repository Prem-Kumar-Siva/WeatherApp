// Homepage.js
import React, { useState } from 'react';
import Axios from 'axios';
import Subappbar from './subappbar';
import WeatherCard from './WeatherCard';
import './style.css';
import { Input } from '@mui/material';

const API_key = 'e6a0a706f92d32b6e8a1fcbbd8bf14cd';

const Homepage = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState();
  const [showWeatherCard, setShowWeatherCard] = useState(false);

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`);
      setData(response.data);
      setShowWeatherCard(true);
    } catch (err) {
      alert('Enter the city name');
    }
  };

  const clearInput = () => {
    setCityName('');
    setData(null);
    setShowWeatherCard(false);
  };

  const closeWeatherCard = () => {
    setShowWeatherCard(false);
  };

  return (
    <>
      <Subappbar />
      <div className='App'>
        <div className='container'>
          <h2 style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>Enter the City Name</h2>
          <br />
          <div className='input-container'>
            <Input
            type="text"
            className='input'
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="City Name"
            />
            <button className='button' onClick={fetchData}>
              Find
            </button>
            <button className='button2' onClick={clearInput}>
              Clear
            </button>
          </div>
        </div>
          <div className="card-container">
            {showWeatherCard && (
              <>
                <WeatherCard data={data} onClose={closeWeatherCard} />
              </>
            )}
          </div>
      </div>
    </>
  );
};

export default Homepage;
