import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Layout} from 'antd';
import React from 'react';

import 'antd/dist/antd.css';
import SideBar from '../../components/SideBar/SideBar.jsx';
import AboutUs from '../Landing/AboutUs/AboutUs.jsx';
import CTA from '../../components/CTA/CTA.jsx';
import Main from './Main/Main.jsx';

const { Sider } = Layout;

function Dashboard() {
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
          <Route path="/main" element={<Main/>} />
          <Route path="/my-profile" element={<AboutUs/>} />
          <Route path="/my-friends" element={<Dashboard/>} />
          <Route path="/my-gifts" element={<AboutUs/>} />
          <Route path="/my-holidays" element={<Dashboard/>} />
          <Route path="/wishlist" element={<AboutUs/>} />
          <Route path="/cart" element={<Dashboard/>} />
          <Route path="/settings" element={<AboutUs/>} />
          <Route path="/help" element={<AboutUs/>} />
          <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </Layout> 

  );
}

export default Dashboard;