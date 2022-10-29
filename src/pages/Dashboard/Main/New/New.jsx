import React from "react";
import './New.scss'
import { ProductItem } from '../../../../components/product-item/product-item';

const PRODUCTS = [
    {
        image: 'https://images.real-gifts.com/catalog/x/z/e/iKZae0Z1.jpg',
        title: 'Парфюм Tom Ford',
        price: 12343,
        id: 1,
    },
    {
        image: 'https://images.real-gifts.com/catalog/g/f/e/EONKRPUI.jpg',
        title: 'Ожерелье Swarovski BELLA',
        price: 21433,
        id: 2,
    },
    {
        image: 'https://images.real-gifts.com/catalog/v/d/a/d4vrblNS.jpg',
        title: 'Тумбочка - 22 x 16 x 24',
        price: 31021,
        id: 3,
    },
   
]

function New() {
    return (
        <div className="new-page">
            { PRODUCTS.map(product => <ProductItem product={product} key={product.id}/>) }
        </div>
    )
}

export default New;
