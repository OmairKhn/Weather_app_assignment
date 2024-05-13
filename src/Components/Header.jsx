// HeaderComponent.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = ({ toggleCollapsed }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/cards">Cards</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/search">Search</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header">
        <div className="logo">
        
        <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="Weather App Logo" className="logo-image" />
        <Link to="/">
        <span className="logo-text">Weather App</span>
        </Link>
      </div>
      <div className="logo" />
      <Dropdown overlay={menu} trigger={['click']}>
        <Button type="primary" className="menu-toggle">
          <MenuOutlined />
        </Button>
      </Dropdown>
    </Header>
  );
};

export default HeaderComponent;
