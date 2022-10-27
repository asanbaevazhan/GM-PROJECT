import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import NewDashboard from '../../pages/Dashboard/NewDashboard';
import { MenuOutlined} from '@ant-design/icons';
import './StoreDrawer.scss'
import DrawerContent from '../DrawerContent/DrawerContent';

const StoreDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MenuOutlined 
        onClick={showDrawer}
      />
      <Drawer title="Меню" placement="right" onClose={onClose} open={open}>
        <DrawerContent/>
      </Drawer>
    </>
  );
};
export default StoreDrawer;