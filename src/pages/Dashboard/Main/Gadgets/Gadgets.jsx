import React from "react";
import './Gadgets.scss'
import { ProductItem } from '../../../../components/product-item/product-item';

const PRODUCTS = [
    {
        image: 'https://www.freeiconspng.com/uploads/apple-brand-macbook-photo-20.png',
        title: 'MacBook Pro',
        price: 128343,
        id: 1,
    },
    {
        image: 'https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg',
        title: 'Samsung Galaxy S22 Ultra 5G',
        price: 191433,
        id: 2,
    },
    {
        image: 'https://www.apple-services.ru/wp-content/uploads/304_apple-watch-1.webp',
        title: 'Apple Watch',
        price: 53021,
        id: 3,
    },
   
]

function Gadgets() {
    return (
        <div className="gadgets-page">
            { PRODUCTS.map(product => <ProductItem product={product} key={product.id}/>) }
        </div>
    )
}

export default Gadgets;