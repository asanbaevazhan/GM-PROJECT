import React from "react";
import './Accessories.scss'
import Data from "../../Data/accessories.json";

function Accessories() {
  return (
    <div className="accessories-wish">
      <div className="accessories-wishlist" >
        {Data.map((item) => (
          <div className="accessories-wishlist-card">
            <img className="accessories-wishlist-product" src={item.image} alt="" />
          </div>
        ))}
        
      </div>
       
    </div>
  );
}

export default Accessories;