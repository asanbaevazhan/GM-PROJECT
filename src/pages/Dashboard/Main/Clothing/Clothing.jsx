import React from "react";
import './Clothing.scss'
import Data from "../../Data/clothing.json";

function Clothing() {
  return (
    <div className="clothing-wish">
      <div className="clothing-wishlist" >
        {Data.map((item) => (
          <div className="clothing-wishlist-card">
            <img className="clothing-wishlist-product" src={item.image} alt="" />
          </div>
        ))}
        
      </div>
       
    </div>
  );
}

export default Clothing;