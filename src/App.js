import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './Components/Sidebar';
import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';
import ContentComponent from './Components/Content';
import CardComponent from './Components/pages/CardComponent';
import SearchComponent from './Components/pages/SearchComponent';
import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    //  i use HashRouter instead of Router because when
    //   i upload it on github pages which is free hosting platform 
    //   then the routes does not work properly so that why i replace itRouter>
     <HashRouter>
     <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <HeaderComponent />
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
    </HashRouter>
  );
};

export default App;
