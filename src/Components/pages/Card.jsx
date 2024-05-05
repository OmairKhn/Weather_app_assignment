import React, { useState, useEffect } from 'react';
import { Input, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';


const Card = ({Location}) => {
  const api_key = '7f05046ed46d6dfc1a85889fefa69e06';
  const [loading, setLoading] = useState(false);
  const [wicon, setWicon] = useState(cloud_icon);
  const [temperature, setTemperature] = useState('');
  const [locationName, setLocationName] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    search(); // Fetch weather data for Islamabad when component mounts
  }, []);

  const search = async () => {
    setLoading(true);
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=Metric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();

    

      setErrorMessage('');
      setHumidity(`${data.main.humidity}%`);
      setWind(`${data.wind.speed} Km/h`);
      setTemperature(`${data.main.temp}°C`);
      setLocationName(data.name);

      switch (data.weather[0].icon) {
        case '01d':
        case '01n':
          setWicon(clear_icon);
          break;
        case '02d':
        case '02n':
          setWicon(cloud_icon);
          break;
        case '03d':
        case '03n':
          setWicon(drizzle_icon);
          break;
        case '04d':
        case '04n':
          setWicon(drizzle_icon);
          break;
        case '09d':
        case '09n':
        case '010d':
        case '010n':
          setWicon(rain_icon);
          break;
        case '013d':
        case '013n':
          setWicon(snow_icon);
          break;
        default:
          setWicon(clear_icon);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setErrorMessage('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='maindiv1'>
      <div className="container1">
        <div className="weather-image">
          {loading ? (
            <Spin size="large" />
          ) : (
            <img src={wicon} alt="" />
          )}
        </div >
        <div className="weather-temp">{temperature}</div>
        <div className="weather-location">{locationName}</div>
        <div className="data-container">
          <div className="element1">
            <img src={humidity_icon} alt="" className="icon1" />
            <div className="data1">
              <div className="humidity-percent">{humidity}</div>
              <div className="text">Humidity</div>
            </div>
          </div>

          <div className="element1">
            <img src={wind_icon} alt="" className="icon1" />
            <div className="data1">
              <div className="wind-rate">{wind}</div>
              <div className="text">Wind</div>
            </div>
          </div>
        </div>
   

      </div>
    </div>
  );
};

export default Card;
