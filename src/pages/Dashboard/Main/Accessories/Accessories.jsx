import React from "react";
import './Accessories.scss'
import { ProductItem } from '../../../../components/product-item/product-item';

const PRODUCTS = [
    {
        image: 'https://images.real-gifts.com/catalog/v/u/g/bq1iiOOr.jpg',
        title: 'Ожерелье Love',
        price: 12343,
        id: 1,
    },
    {
        image: 'https://images.real-gifts.com/catalog/u/g/q/prkGfUnd.jpg',
        title: 'Браслет-плетение',
        price: 21433,
        id: 2,
    },
    {
        image: 'https://images.real-gifts.com/catalog/e/x/c/YuSgEAPf.jpg',
        title: 'Теннисный браслет',
        price: 31021,
        id: 3,
    },
    {
        image: 'https://images.real-gifts.com/catalog/g/f/e/EONKRPUI.jpg',
        title: 'Ожерелье Swarovski BELLA',
        price: 21433,
        id: 4,
    },
    {
        image: 'https://images.real-gifts.com/catalog/a/y/s/x9c2USzW.jpg',
        title: 'Серьги из белого и розового золота',
        price: 31021,
        id: 5,
    },
   
]

function Accessories() {
    return (
        <div className="accessories-page">
            { PRODUCTS.map(product => <ProductItem product={product} key={product.id}/>) }
        </div>
    )
}

export default Accessories;