import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductCategory } from "../product-category/product-category";
import { ProductBuy } from '../product-buy/product-buy'
import { ProductCover } from "../product-cover/product-cover";
import { setCurrentProduct } from "../../store/products/reducer";
import "./product-item.css";

export const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/app/${product.title}`);
  };

  return (
    <div className="product-item" onClick={handleClick}>
      <ProductCover image={product.image} />
      <div className="product-item__details">
        <span className="product-item__title">{product.title}</span>
        <div className="product-item__genre">
          {product.category.map((category) => (
            <ProductCategory genre={category} key={category} />
          ))}
        </div>
        <div className="product-item__buy">
          <ProductBuy product={product} />
        </div>
      </div>
    </div>
  );
};
