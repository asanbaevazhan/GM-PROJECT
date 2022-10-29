import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from '../utils';
import cart from './../../assets/side-bar-icons/shopping-cart.svg'
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();
  const totalPrice = calcTotalPrice(items);

  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <div className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}>
        <img src={cart} alt="" />
      </div>
      {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} сом.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu onClick={ handleGoToOrderClick }/>}
    </div>
  );
};
