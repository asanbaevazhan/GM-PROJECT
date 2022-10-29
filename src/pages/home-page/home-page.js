import React from 'react';
import { ProductItem } from '../../components/product-item/product-item';
import './home-page.css';

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
    {
        image: 'https://gift.me/assets/store/boots.png',
        title: "Cапоги Martin's",
        price: 8789,
        id: 4,
    },
    {
        image: 'https://images.real-gifts.com/catalog/o/r/c/oUqWwu1s.jpg',
        title: 'Кроссовки Love Moschino',
        price: 17982,
        id: 5,
    },
    {
        image: 'https://images.real-gifts.com/catalog/t/n/v/9ZF0OIuH.jpg',
        title: 'Сумка через плечо Guess',
        price: 12343,
        id: 6,
    },
    {
        image: 'https://images.real-gifts.com/catalog/e/a/r/GgV1IpIY.jpg',
        title: 'Часы Calvin Klein',
        price: 21433,
        id: 7,
    },
    {
        image: 'https://images.real-gifts.com/catalog/s/y/p/hHJJKICk.jpg',
        title: 'Очки Calvin Klein',
        price: 31021,
        id: 8,
    },
   
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { PRODUCTS.map(product => <ProductItem product={product} key={product.id}/>) }
        </div>
    )
}
