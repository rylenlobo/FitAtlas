import React from "react"
import "./ProductCard.css"

const ProductCard = ({ img, name, price, category }) => {
  return (
    <div>
      <div className="product-card">
        <div className="product-tumb">
          <img src={img} alt="" />
        </div>
        <div className="product-details">
          <span className="product-catagory">{category}</span>
          <h4>
            <a href="">{name}</a>
          </h4>
          <div className="product-bottom-details">
            <div className="product-price">{price}</div>
            <div className="product-links"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
