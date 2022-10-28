import React from "react";
import { useSelector} from 'react-redux';
import { ProductBuy } from "../../components/product-buy/product-buy";
import { ProductCover } from "../../components/product-cover/product-cover";
import { ProductCategory } from "../../components/product-category/product-category";
import "./product-page.css";

export const ProductPage = () => {
  const product = useSelector(state => state.product.currentProduct);

  if(!product) return null

  return (
    <div className="product-page">
      <h1 className="product-page__title">{ product.title }</h1>
      <div className="product-page__content">
        <div className="product-page__left">
          <iframe
            width="90%"
            height="400px"
            src={product.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="product-page__right">
          <ProductCover image={product.image} />
          <p>{product.description}</p>
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          {product.genres.map((genre) => (
            <ProductCategory genre={genre} key={genre} />
          ))}
          <div className="product-page__buy-product">
            <ProductBuy  product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};
