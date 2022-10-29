import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button/button";
import { setItemInCart, deleteItemFromCart } from "../../store/cart/reducer";
import "./product-buy.css";


export const ProductBuy = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === product.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(product.id));
    } else {
      dispatch(setItemInCart(product));
    }
  };

  return (
    <div className="product-buy">
      <span className="product-buy__price">{product.price} сом.</span>
      <Button
        type={isItemInCart ? "secondary" : "primary" }
        onClick={handleClick}
      >
        {isItemInCart ? "Убрать из корзины" : "В Корзину"}
      </Button>
    </div>
  );
};
