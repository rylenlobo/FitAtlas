import React from "react"
import "./OfferHeroBanner.css"

const OffersHeroBanner = ({ title, description, img, component }) => {
  return (
    <div>
      <div className="offer-hero-banner-container">
        <div className="offer-hero-banner-left">
          <div className="offer-hero-banner-text">
            <h1>{title}</h1>
            <h6>{description}</h6>
          </div>
          {component}
        </div>
        <div className="offer-banner-image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OffersHeroBanner
