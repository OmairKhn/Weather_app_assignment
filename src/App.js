// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderComponent from './Components/Header';
import Sidebar from './Components/Sidebar';
import FooterComponent from './Components/Footer';
import ContentComponent from './Components/Content';
import CardComponent from './Components/pages/CardComponent';
import SearchComponent from './Components/pages/SearchComponent';
import './App.css';

const { Content } = Layout;

const App = () => {

 
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <Sidebar  />
        
        {/* Main content */}
        <Layout>
          <HeaderComponent  />

          <Content>
            <Routes>
              <Route exact path="/" element={<ContentComponent />} />
              <Route path="/cards" element={<CardComponent />} />
              <Route path="/search" element={<SearchComponent />} />
            </Routes>
          </Content>

          <FooterComponent />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
