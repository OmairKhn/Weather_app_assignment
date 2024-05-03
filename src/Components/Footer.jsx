// FooterComponent.js
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
  return (

    <Footer className="footer">
      <p>This is a weather application built with React. It provides features to search for weather conditions, view forecasts, and more.</p>
      <p>Powered by React, Ant Design, and a weather API.</p>
    </Footer>
  );
};

export default FooterComponent;

