// ProductCard.js

import React from 'react';
// import './ProductCard.css';

const ProductCard = ({ productBrand,productRAM,productROM,Image_URL, productName, productPrice, regularPrice, onAddToCart, product_ID,handlewishlist }) => {
  return (
    <>
      <div className="product-card">
        <div onClick={()=>handlewishlist(
          productName,
          productBrand,
          productPrice,
          productRAM,
          productROM,
          regularPrice,
          Image_URL,
          product_ID
          )} className="wishlist-icon">&#x2665;</div>
        <div className="product-image">
        <img  src={Image_URL[0]} alt={productName} />
        </div>
        <div className="product-info">
          <h3 className="product-name">{productName}</h3>
          <div className="price-section">
            <span className="product-price">${productPrice}</span>
            <span className="regular-price">{regularPrice}</span>
          </div>
          <button className="add-to-cart-button" onClick={() => onAddToCart(productName, productPrice, regularPrice, Image_URL, product_ID)}>
            Add to Cart
          </button>
        </div>
      </div>


    </>
  );
};

export default ProductCard;
