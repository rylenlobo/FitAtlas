import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to="" className="link">
      <div className="product-card">
        <img src={product.img[0]} alt={product.name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-desc">{product.desc.slice(0,130)}...</p>
          <div className="info">
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
