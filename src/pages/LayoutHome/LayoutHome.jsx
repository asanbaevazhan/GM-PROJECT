import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Layout} from 'antd';
import React from 'react';

import 'antd/dist/antd.css';
import './LayoutHome.scss';
import SideBar from '../../components/SideBar/SideBar.jsx';
import MainPage from '../MainPage/MainPage.jsx';
import AboutUs from '../AboutUs/AboutUs.jsx';

const { Sider } = Layout;

function LayoutHome() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
      >
        <SideBar/>
      </Sider>
      
      <Routes>
          <Route path="/main" element={<MainPage/>} />
          <Route path="/about-us" element={<AboutUs/>} />
      </Routes>

    </Layout>

  );
}

export default LayoutHome;