import React from "react";
import './HomeDecor.scss'
import { ProductItem } from '../../../../components/product-item/product-item';

const PRODUCTS = [
    {
        image: 'https://www.ikea.com/gb/en/images/products/svallet-work-lamp-dark-grey-white__0703502_pe724751_s5.jpg?f=xxs',
        title: 'Лампа Ikea',
        price: 8343,
        id: 1,
    },
    {
        image: 'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1022428_pe832716_s5.jpg?f=xxs',
        title: 'Рабочий стол Ikea',
        price: 21433,
        id: 2,
    },
    {
        image: 'https://cdn2.dekoria.com/image/djpg/345/345_27.1/0/0/Ektorp-2-seater-sofa-bed-cover-for-model-on-sale-in-Ikea-2004-2011_27.jpg',
        title: 'Диван Ektorp',
        price: 53021,
        id: 3,
    },
    {
        image: 'https://media.istockphoto.com/photos/a-lit-scented-new-candle-in-glass-on-a-white-insulated-background-picture-id1344382252?b=1&k=20&m=1344382252&s=170667a&w=0&h=TiwOv4WLHf82cUft1IwuXRqX0uoprESKMxegLEj-UTk=',
        title: 'Ароматическая свеча GiftMe',
        price: 970,
        id: 4,
    }
   
]

function HomeDecor() {
    return (
        <div className="home-decor-page">
            { PRODUCTS.map(product => <ProductItem product={product} key={product.id}/>) }
        </div>
    )
}

export default HomeDecor;