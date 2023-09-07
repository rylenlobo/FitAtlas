// eslint-disable-next-line no-unused-vars
<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import fitAtlas from "./assets/FitAtlas.svg";
import { motion } from "framer-motion";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuLink from '../menulink/MenuLink.jsx';
import LogoutIcon from '@mui/icons-material/Logout';
import { Add } from "@mui/icons-material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InsightsIcon from '@mui/icons-material/Insights';
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
=======
import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"
import cart from "./assets/cart.svg"
import userIcon from "./assets//user.svg"
import fitAtlas from "./assets/FitAtlas.svg"
import { motion } from "framer-motion"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import { grey, pink, red } from "@mui/material/colors"
import { Tooltip } from "@mui/material"
import axios from "axios"
import PersonIcon from "@mui/icons-material/Person"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import LogoutIcon from "@mui/icons-material/Logout"

const Navbar = () => {
  const currentUser = true
  // JSON.parse(localStorage.getItem("currentUser"))
>>>>>>> 794dc5650847f4e319df25e66b103dcb8fc421eb

  const decoartion = {
    paddingLeft: 13,
    textDecoration: "none",
    color: "white",
  }

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
<<<<<<< HEAD
      await axios.post("http://localhost:8800/api/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
=======
      await axios.post("http://localhost:8800/server/auth/logout")
      localStorage.setItem("currentUser", null)
      navigate("/store")
>>>>>>> 794dc5650847f4e319df25e66b103dcb8fc421eb
    } catch (e) {
      console.log(e)
    }
  }

  console.log(currentUser)
  return (
    <>
      <nav className="Navbar">
        <div className="logo-wrapper">
          <Link to="/" style={{ fontFamily: "Space Grotesk" }}>
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
          {/* <div className="cart">
            <Tooltip title="Cart">
              <ShoppingCartCheckoutIcon
                style={{ color: "grey", fontSize: "32px" }}
              />
            </Tooltip>
          </div> */}

          <div>
            {currentUser ? (
<<<<<<< HEAD
              <div className="profile" onClick={() => setOpen(!open)}>
                <AccountCircleIcon sx={{ fontSize: "25px" }} />
                <span className="user">
                  Hi, {currentUser?.details.firstName}
                </span>

                {open && (
              <>
                <div className="options ">
                  {currentUser?.isAdmin ? (
                    <>
                      <Link className="link" to="/add">
                        <MenuLink text="Add Item" icon={<Add/>}/>
                      </Link>
                      <Link className="link" to="/">
                       <MenuLink text="Orders" icon={<LocalMallIcon/>}/>
                      </Link>
                    </>
                  ) : (
                    <>
                    <Link className="link" to="/order">
                       <MenuLink text="Track" icon={<InsightsIcon/>}/>
                      </Link>
                      <Link className="link" to="/cart">
                       <MenuLink text="Cart" icon={<ShoppingCartCheckoutIcon/>}/>
                      </Link>
                    </>
                  )
                }
                  <Link className="link" to="/" onClick={handleLogout}>
                  <MenuLink text="Logout" icon={<LogoutIcon/>}/>
                  </Link>
                </div>
              </>
            )}
              </div>
=======
              <Tooltip
                sx={{ marginLeft: "50px !important" }}
                title={
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton onClick={handleLogout}>
                        <ListItemIcon>
                          <LogoutIcon sx={{ color: "red" }} />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                }
              >
                <div className="profile">
                  <PersonIcon style={{ color: "grey", fontSize: "32px" }} />
                  <span className="user">Hi,Rylen </span>
                  {/* {currentUser?.details.firstName} */}
                </div>
              </Tooltip>
>>>>>>> 794dc5650847f4e319df25e66b103dcb8fc421eb
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
