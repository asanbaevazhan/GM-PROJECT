import React from "react";
import './Clothing.scss'
import { ProductItem } from '../../../../components/product-item/product-item';

const PRODUCTS = [
    {
        image: 'https://i.pinimg.com/736x/75/e6/de/75e6deb43e1dc44368339e48c49c4e91.jpg',
        title: 'Cпортивный костюм Adidas',
        price: 12343,
        id: 1,
    },
    {
        image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F01%2Fjil-sander-logo-cotton-poplin-t-shirt-release-1.jpg?q=75&w=800&cbr=1&fit=max',
        title: ' Футболка Jil Sander',
        price: 2433,
        id: 2,
    },
    {
        image: 'https://cdn.shopify.com/s/files/1/1626/5391/products/Pangaia-365-Signature-Sand-Sweatpants-Crepslocker-Front.jpg?v=1664458929',
        title: 'Спортивные штаны Pangaia',
        price: 3521,
        id: 3,
    },
    {
        image: 'https://www.triads.co.uk/images/products/zoom/1609936609-77168300.jpg',
        title: 'Худи Nike',
        price: 3021,
        id: 4,
    },
   
]

function Clothing() {
    return (
        <div className="clothing-page">
            { PRODUCTS.map(product => <ProductItem product={product} key={product.id}/>) }
        </div>
    )
}

export default Clothing;