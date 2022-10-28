import React from 'react';
import './product-category.css';

export const ProductCategory = ({ category = '' }) => {
    return <span className="product-category">{ category }</span>
}