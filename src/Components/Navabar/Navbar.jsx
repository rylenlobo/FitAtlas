// eslint-disable-next-line no-unused-vars
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import cart from "./assets/cart.svg"
import userIcon from "./assets//user.svg"
import fitAtlas from "./assets/FitAtlas.svg"
import { motion } from "framer-motion"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import { grey, pink, red } from "@mui/material/colors"
import { Tooltip } from "@mui/material"

const user = "Rylen"
const decoartion = { paddingLeft: 13, textDecoration: "none", color: "white" }
const isUserLoggedIn = false

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={fitAtlas} alt="FitAtlas" />
          </Link>
        </div>

        <div className="left-wrapper">
          <Link style={decoartion} to="home">
            <div>HOME</div>
          </Link>
          <Link style={decoartion} to="store">
            <div>STORE</div>
          </Link>
        </div>

        <div>
          <input className="search" placeholder="Search" />
        </div>

        <div className="right-wrapper">
          <div className="cart">
            <Tooltip title="Cart">
              <ShoppingCartCheckoutIcon
                style={{ color: "grey", fontSize: "32px" }}
              />
            </Tooltip>
          </div>

          <div>
            {isUserLoggedIn ? (
              <div className="profile">
                <img className="dp" src={userIcon} alt="DP" />
                <Link style={decoartion} to="profile">
                  Hi,{user}
                </Link>
              </div>
            ) : (
              //prettier-ignore
              <div className="profile-log-signup">
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link to="signup" style={decoartion}>
                    <button className="sign-up">SIGN UP</button>
                  </Link>
                </motion.div>

                <motion.div
                  className="box"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link to="login" style={decoartion}>
                    <button className="login">LOGIN</button>
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
