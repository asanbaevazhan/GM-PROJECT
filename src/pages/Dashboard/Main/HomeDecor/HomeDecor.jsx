import React from "react";
import './HomeDecor.scss'
import Data from "../../Data/home-decor.json";

function HomeDecor() {
  return (
    <div className="home-decor-wish">
      <div className="home-decor-wishlist" >
        {Data.map((item) => (
          <div className="home-decor-wishlist-card">
            <img className="home-decor-wishlist-product" src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeDecor;