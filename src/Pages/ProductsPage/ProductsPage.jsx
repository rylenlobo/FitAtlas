import React from "react"
import ProductCard from "../../Components/ProductCard/ProductCard"
import "./ProductsPage.css"
// Define an array to store the product objects

const products = [
  {
    img: "https://m.media-amazon.com/images/I/313IGd9durL._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Product 1",
    price: 19.99,
    category: "Electronics",
  },
  {
    img: "https://m.media-amazon.com/images/I/41liXNzwtDL._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Product 2",
    price: 29.99,
    category: "Clothing",
  },
  {
    img: "https://m.media-amazon.com/images/I/611S1hXBWVL._SX679_.jpg",
    name: "Product 3",
    price: 9.99,
    category: "Home Decor",
  },
  {
    img: "https://m.media-amazon.com/images/I/41TyvNHYsOL._SY300_SX300_QL70_FMwebp_.jpg",
    name: "Product 4",
    price: 14.99,
    category: "Toys",
  },
  {
    img: "https://m.media-amazon.com/images/I/31QP1eBBEdL._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Product 5",
    price: 39.99,
    category: "Electronics",
  },
  {
    img: "https://m.media-amazon.com/images/I/51y4dKDeMKL._SX679_.jpg",
    name: "Product 6",
    price: 49.99,
    category: "Clothing",
  },
  {
    img: "https://m.media-amazon.com/images/I/51783rbguOL._SX679_.jpg",
    name: "Product 7",
    price: 7.99,
    category: "Home Decor",
  },
  {
    img: "https://m.media-amazon.com/images/I/31Ac4Zu9MNL._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Product 8",
    price: 12.99,
    category: "Toys",
  },
  {
    img: "https://m.media-amazon.com/images/I/71rZx3A3fQL._SX679_.jpg",
    name: "Product 9",
    price: 34.99,
    category: "Electronics",
  },
  {
    img: "https://m.media-amazon.com/images/I/71rZx3A3fQL._SX679_.jpg",
    name: "Product 10",
    price: 19.99,
    category: "Clothing",
  },
]

const ProductsPage = () => {
  return (
    <div className="products-container">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.name}
            img={item.img}
            name={item.name}
            price={item.price}
            category={item.category}
          />
        )
      })}
    </div>
  )
}

export default ProductsPage
