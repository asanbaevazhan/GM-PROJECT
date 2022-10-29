import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/cart/reducer";
import "./cart-item.css";
import close from './../../assets/icons/cancel-icon.png'

export const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="cart-item">
      <span>{title} </span>
      <div className="cart-item__price">
        <span>{price} сом.</span>

        <div className="cart-item__delete-icon"
          onClick={handleDeleteClick}>
          <img src={close} alt="" />
        </div>

      </div>
    </div>
  );
};
