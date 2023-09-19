import React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import Rating from "@mui/material/Rating"

const ProductCard = ({ props, onClick }) => {
  return (
    <Link to="" className="link">
      <div className="product-card">
        <img src={props.img[0]} alt={props.name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{props.name}</h2>
          <div style={{ margin: "15px 0" }}>
            <Rating
              readOnly
              defaultValue={props.rating}
              sx={{ color: "#4c7abb" }}
            />
            <p>
              {props.type === "equipment"
                ? ""
                : "Available in " + props.flavour.length + " flavour"}
            </p>
          </div>
          <div className="info">
            <p className="product-price">${props.price}</p>
            <button className="add-to-cart-button" onClick={onClick}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
