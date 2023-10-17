import React from 'react'
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import { Link } from 'react-router-dom';
import './error.css'

const Error = () => {
  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <CreditCardOffIcon sx={{fontSize:"40px"}} />
        </p>
        <h2>Payment Failed!</h2>
        <p className="email-msg">Hey, seems like there was some trouble. <br /> We are there with you, Just hold back.</p>
        <p className="description">
          24 oct 2023 11:55 PM
        </p>
        <Link to="/cart">
          <button type="button" width="300px" className="cancel-btn">
            try again
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Error