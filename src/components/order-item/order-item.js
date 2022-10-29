import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ProductCover } from '../product-cover/product-cover';
import './order-item.css';
import { deleteItemFromCart } from '../../store/cart/reducer';

export const OrderItem = ({ product }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(product.id))
    }
   
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <ProductCover image={product.image} />
            </div>
            <div className="order-item__title">
                <span> {product.title} </span>
            </div>
            <div className="order-item__price">
                <span>{product.price} сом.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>

    )
}
