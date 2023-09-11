import React, { useState } from "react"
import ProductCard from "../../Components/ProductCard/ProductCard"
import "./ProductsPage.css"
import useFetch from "../../utils/useFetch.jsx"
// Define an array to store the product objects

// const products = [
//   {
//     id: 1,
//     img: "https://m.media-amazon.com/images/I/313IGd9durL._SX300_SY300_QL70_FMwebp_.jpg",
//     name: "Product 1",
//     price: 19.99,
//     category: "Electronics",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//     weight: "1.5kg",
//   },
//   {
//     id: 2,
//     img: "https://m.media-amazon.com/images/I/41liXNzwtDL._SX300_SY300_QL70_FMwebp_.jpg",
//     name: "Product 2",
//     price: 29.99,
//     category: "Clothing",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/611S1hXBWVL._SX679_.jpg",
//     name: "Product 3",
//     price: 9.99,
//     category: "Home Decor",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
//   {
//     id: 4,
//     img: "https://m.media-amazon.com/images/I/41TyvNHYsOL._SY300_SX300_QL70_FMwebp_.jpg",
//     name: "Product 4",
//     price: 14.99,
//     category: "Toys",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
//   {
//     id: 5,
//     img: "https://m.media-amazon.com/images/I/31QP1eBBEdL._SX300_SY300_QL70_FMwebp_.jpg",
//     name: "Product 5",
//     price: 39.99,
//     category: "Electronics",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
//   {
//     id: 6,
//     img: "https://m.media-amazon.com/images/I/51y4dKDeMKL._SX679_.jpg",
//     name: "Product 6",
//     price: 49.99,
//     category: "Clothing",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
//   {
//     id: 7,
//     img: "https://m.media-amazon.com/images/I/51783rbguOL._SX679_.jpg",
//     name: "Product 7",
//     price: 7.99,
//     category: "Home Decor",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
//   {
//     id: 8,
//     img: "https://m.media-amazon.com/images/I/31Ac4Zu9MNL._SX300_SY300_QL70_FMwebp_.jpg",
//     name: "Product 8",
//     price: 12.99,
//     category: "Toys",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
//   {
//     id: 9,
//     img: "https://m.media-amazon.com/images/I/71rZx3A3fQL._SX679_.jpg",
//     name: "Product 9",
//     price: 34.99,
//     category: "Electronics",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
//   {
//     id: 10,
//     img: "https://m.media-amazon.com/images/I/71rZx3A3fQL._SX679_.jpg",
//     name: "Product 10",
//     price: 19.99,
//     category: "Clothing",
//     desc: "Lorem ipsum is placeholder text commonly used in the graphic, mockups...",
//   },
// ]

const ProductsPage = () => {
  const [maxPrice, setMaxPrice] = useState(1500)

  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:8800/api/product/"
  )

  // console.log(data);

  const handleRange = (e) => {
    setMaxPrice(e.target.value)

    reFetch(`http://localhost:8800/api/product?max=${maxPrice}`)
  }

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Filter By Type</h2>
          <div className="inputItem">
            <input type="radio" id="product" value="product" name="price" />
            <label htmlFor="product">Products</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="equipment" value="equipment" name="price" />
            <label htmlFor="equipment">Equipments</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Resistance Band</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Barbell</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Dumbbell</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="4">Roller</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value={5} />
            <label htmlFor="5">Rope</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value={6} />
            <label htmlFor="6">Trap bar</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="7" value={7} />
            <label htmlFor="7">Stationary Bike</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="8" value={8} />
            <label htmlFor="8">Stepmill Machine</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="9" value={9} />
            <label htmlFor="9">Wheel Roller</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="10" value={10} />
            <label htmlFor="10">Medicine Ball</label>
          </div>
        </div>
        <div className="filterItem slider">
          <h2>Filter By price</h2>
          <span>0</span>
          <input type="range" min={0} max={1500} onChange={handleRange} />
          <span>{maxPrice}</span>
        </div>
      </div>
      <div className="right">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
