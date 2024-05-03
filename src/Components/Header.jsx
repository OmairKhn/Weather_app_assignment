import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <div className='header'>
    <Header className="">
      <div className="logo">
        
        <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="Weather App Logo" className="logo-image" />
        <Link to="/">
        <span className="logo-text">Weather App</span>
        </Link>
      </div>
    </Header>
    </div>
  );
};

export default HeaderComponent;
