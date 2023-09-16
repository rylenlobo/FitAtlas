import React, { Component } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import './HeroBanner.css'


const HeroBanner = ({title,description,img,component}) => {
  return (
    <div>
      <div className="hero-banner-container">
        <div className="hero-banner-left">
          <div className="hero-banner-text">
            <h1>{title}</h1>
            <h6>
              {description}
            </h6>
          </div>
          {component}
        </div>
        <div className="banner-image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
