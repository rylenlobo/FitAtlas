import React,{ useState, useEffect, useReducer, useContext } from "react";
import { BsBagCheckFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { runFireworks } from "../../utils/Fireworks";
import "./sucess.css"
import { reducer } from "../../utils/Reducer";
import { GlobalStateContext } from "../../Context/Context";

const Sucess = () => {
  const {clearCart} = useContext(GlobalStateContext);
  
  useEffect(() => {
    clearCart();
    runFireworks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            admin@fitatlas.com
          </a>
        </p>
        <Link to="/store">
          <button type="button" width="300px" className="sucess-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sucess;
