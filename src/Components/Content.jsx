import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const ContentComponent = () => {
  return (
    <Content className="content background-image" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZEGSfs1VMPExEzm_otRlukFxLEOKr04ZC9A&s")', backgroundSize: 'cover', minHeight: '65.7vh', margin: 0, padding: 0 }}>
      <div className="home-screen" style={{ paddingTop: '50px', padding: '20px' }}>
        <Title level={2}>Welcome to the Weather App</Title>
        <Paragraph>
          This is a simple weather application built with React.
          It allows you to search for weather conditions, view forecasts, and more.
        </Paragraph>
        <Paragraph>
          Get started by using the navigation menu on the left to explore the app features.
        </Paragraph>
      </div>
    </Content>
  );
};

export default ContentComponent;
