import React, { useState } from 'react';
import { Input, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import Nightclear from '../Assets/Nightclear.png'
import Nightmist from '../Assets/Nightmist.png';
import Nightclouds from '../Assets/Nightclouds.png';
import Heaveyrain from '../Assets/Heaveyrain.png';

const SearchComponent = () => {
  const api_key = '7f05046ed46d6dfc1a85889fefa69e06';
  const [loading, setLoading] = useState(false);
  const [wicon, setWicon] = useState(cloud_icon);
  const [temperature, setTemperature] = useState('');
  const [locationName, setLocationName] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const search = async () => {
    setLoading(true);
    const element = document.getElementsByClassName('cityinput');
    if (element[0].value === '') {
      setLoading(false);
      setErrorMessage('Please enter a location');
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
  
      if (data.cod === '404') {
        setErrorMessage('Location not found');
        return;
      }


  
      setErrorMessage('');
      setHumidity(`${data.main.humidity}%`);
      setWind(`${data.wind.speed} Km/h`);
      setTemperature(`${data.main.temp}°C`);
      setLocationName(data.name);
  
      switch (data.weather[0].icon) {
        case '01d':
          setWicon(clear_icon);
          break;
          case '01n':
            setWicon(Nightclear);
            break;
        case '02d':
          setWicon(cloud_icon);
          break;
          case '02n':
            setWicon(Nightclouds);
            break;
        case '03d':
          setWicon(drizzle_icon);
          break;
          case '03n':
            setWicon(Heaveyrain);
            break;
        case '04d':
          setWicon(drizzle_icon);
          break;
          case '04n':
            setWicon(Nightclouds);
            break;
        case '09d': 
        case '010d':
          setWicon(rain_icon);
          break;
          case '09n':
          case '010n':
          setWicon(Heaveyrain);
          break;
        case '013d':
        case '013n':
          setWicon(snow_icon);
          break;
          case '50n':
            setWicon(Nightmist);
            break;
        default:
          setWicon(Heaveyrain);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='main_container'>
      <div className="container">
        <div className="top-bar">
          <Input type="text" className="cityinput" placeholder="Enter your location" />
          <div className="search-icon" onClick={search}>
            <SearchOutlined />
          </div>
        </div>
        <div className="weather-image">
          {loading ? (
            <Spin size="large" />
          ) : (
            <img src={wicon} alt="" />
          )}
        </div>
        <div className="weather-temp">{temperature}</div>
        <div className="weather-location">{locationName}</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">{humidity}</div>
              <div className="text">Humidity</div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind-rate">{wind}</div>
              <div className="text">Wind</div>
            </div>
          </div>
        </div>
        <div className='error'></div>
        {errorMessage && (
  <div style={{ color: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {errorMessage}
  </div>
)}

      </div>
    </div>
  );
};

export default SearchComponent;
