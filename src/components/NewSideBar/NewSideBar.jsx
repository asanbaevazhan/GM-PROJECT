import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import "./NewSideBar.scss";
import Icon from "@ant-design/icons";
import Main from "../../pages/Dashboard/Main/Main";

function SideBar() {
  const navigate = useNavigate();

  // Main



  function getItem(label, key, icon, children) {
    return {
      label,
      key,
      icon,
      children,
    };
  }

  

  const handleMenuClick = (item) => {
    navigate(item.key);
  };

  return (
    <div className="side-bar">
      <h1>G</h1>
      
    </div>
  );
}

export default SideBar;
