import {  Layout} from 'antd';
import React from 'react';
import './DashHeader.scss'
import { Input, Space } from 'antd';
import profile from './../../../assets/img/Profile Photo.svg'
const { Search } = Input;
const { Header } = Layout;


const onSearch = (value) => console.log(value);

const DashHeader = () => (
  <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        background: 'transparent',
        display: 'flex'
      }}
    >

    <div className='profile'>
      <img src={profile} alt="" />
      <p>Иван Иванов</p>
    </div>

    <Space direction="vertical">
      <Search
        placeholder="Поиск"
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </Space>
      

    
    </Header>
  </Layout>
);
export default DashHeader;