import { Drawer } from 'antd';
import React, { useState } from 'react';
import NewDashboard from '../../pages/Dashboard/NewDashboard';
import { SettingOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import './SettingsDrawer.scss'

const SettingsDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
    <SettingOutlined 
        onClick={showDrawer}
    />
      <Drawer title="Настройки" placement="right" onClose={onClose} open={open}>
        <p>Light <Switch defaultChecked onChange={onChange} /> Dark</p>
      </Drawer>
    </>
  );
};
export default SettingsDrawer;
