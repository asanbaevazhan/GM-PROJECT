import React from "react";
import './Gadgets.scss'
import Data from "../../Data/gadgets.json";

function Gadgets() {
  return (
    <div className="gadgets-wish">
      <div className="gadgets-wishlist" >
        {Data.map((item) => (
          <div className="gadgets-wishlist-card">
            <img className="gadgets-wishlist-product" src={item.image} alt="" />
          </div>
        ))}
        
      </div>
       
    </div>
  );
}

export default Gadgets;