import { BackTop } from 'antd';
import React from 'react';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#18625A',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const BackToTop = () => (
  <div
    style={{
      height: '600vh',
      padding: 8,
    }}
  >
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  </div>
);
export default BackToTop;