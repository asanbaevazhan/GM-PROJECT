import React from "react";
import './New.scss'
import Data from "../../Data/new.json";

function New() {
    
  return (
    <div className="new-wish">
      <div className="new-wishlist" >
        {Data.map((item) => (
          <div className="new-wishlist-card">
            <img className="new-wishlist-product" src={item.image} alt="" />
          </div>
        ))}
        
      </div>
       
    </div>
  );
}

export default New;