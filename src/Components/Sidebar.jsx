import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
      style={{ background: '#fff', position: 'sticky', top: 0 }}
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/search">Search weather</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/cards">Cards</Link>
        </Menu.Item>

        
      </Menu>
    </Sider>
  );
};

export default Sidebar;
