import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import React from 'react';
import './Dashboard.scss'

import 'antd/dist/antd.css';
import NewSideBar from '../../components/NewSideBar/NewSideBar';

import Main from './Main/Main.jsx';
import MyProfile from './MyProfile/MyProfile';
import MyFriends from './MyFriends/MyFriends.jsx'
import MyGifts from './MyGifts/MyGifts.jsx'
import MyHolidays from './MyHolidays/MyHolidays';
import Wishlist from './Wishlist/Wishlist.jsx';
import Cart from './Cart/Cart'
import Settings from './Settings/Settings';
import Help from './Help/Help';
import AboutUsPage from './AboutUsPage/AboutUsPage';

const { Sider, Header} = Layout;


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
        <NewSideBar/>
      </Sider>

      {/* <DashHeader/> */}
      {/* <MUHeader/> */}
      
      <Routes>
          <Route path="/main" element={<Main/>} />
          <Route path="/my-profile" element={<MyProfile/>} />
          <Route path="/my-friends" element={<MyFriends/>} />
          <Route path="/my-gifts" element={<MyGifts/>} />
          <Route path="/my-holidays" element={<MyHolidays/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/about-us" element={<AboutUsPage/>} />
      </Routes>
    </Layout> 

  );
}

export default Dashboard;