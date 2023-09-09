// eslint-disable-next-line no-unused-vars
import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Navbar.css"
import fitAtlas from "./assets/FitAtlas.svg"
import { motion,AnimatePresence  } from "framer-motion"
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MenuLink from "../menulink/MenuLink.jsx"
import LogoutIcon from "@mui/icons-material/Logout"
import { Add } from "@mui/icons-material"
import LocalMallIcon from "@mui/icons-material/LocalMall"
import InsightsIcon from "@mui/icons-material/Insights"
import axios from "axios"
import Toast from "../Toast/Toast"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  const currentUser = true
  // JSON.parse(localStorage.getItem("currentUser"))

  const decoartion = {
    paddingLeft: 13,
    textDecoration: "none",
    color: "white",
  }

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/logout")
      setMessage(res.data)
      localStorage.setItem("currentUser", null)
      navigate("/")
    } catch (e) {
      console.log(e)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setMessage("")
  }
  return (
    <>
      <Toast open={message} close={handleClose} type="success">
        {message}
      </Toast>
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
              <div className="profile" onClick={() => setOpen(!open)}>
                <AccountCircleIcon sx={{ fontSize: "25px" }} />
                <span className="user">
                  Hi,Rylen
                  {/* {currentUser?.details.firstName} */}
                </span>
                <AnimatePresence>
                  {open && (
                    <>
                      <motion.div
                        className="options"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentUser?.isAdmin ? (
                          <>
                            <Link className="link" to="/add">
                              <MenuLink text="Add Item" icon={<Add />} />
                            </Link>
                            <Link className="link" to="/">
                              <MenuLink
                                text="Orders"
                                icon={<LocalMallIcon />}
                              />
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link className="link" to="/order">
                              <MenuLink text="Track" icon={<InsightsIcon />} />
                            </Link>
                            <Link className="link" to="/cart">
                              <MenuLink
                                text="Cart"
                                icon={<ShoppingCartCheckoutIcon />}
                              />
                            </Link>
                          </>
                        )}
                        <Link className="link" to="/" onClick={handleLogout}>
                          <MenuLink text="Logout" icon={<LogoutIcon />} />
                        </Link>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
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
                    <button className="login">SIGN IN</button>
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
