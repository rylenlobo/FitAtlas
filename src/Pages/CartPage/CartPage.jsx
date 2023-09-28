import React, { useState, useEffect, useReducer } from "react"
import { GlobalStateContext } from "../../Context/Context.jsx"
import { useContext } from "react"
import "./CartPage.css"
import { uid } from "uid"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import CloseIcon from "@mui/icons-material/Close"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import DeleteIcon from "@mui/icons-material/Delete"
import Badge from "@mui/material/Badge"
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee"
import { phcartItems } from "../../Context/Context.jsx"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { CartItem } from "../../Components/CartItem.jsx/CartItem.jsx"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import { Link } from "react-router-dom"

const CartPage = () => {
  const { state, removeEl } = useContext(GlobalStateContext)

  return (
    <div className="cart-page-container">
      {state.items.length !== 0 ? (
        <Stack direction="row" justifyContent="flex-start">
          <Stack
            spacing={5}
            sx={{
              width: "1000px",
              height: "600px",
              border: "2px solid #2b2b2b",
              boxSizing: "border-box",
              overflow: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Stack
              className="cart-items-header"
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
              sx={{
                position: "sticky",
                backgroundColor: "#121212",
                padding: "20px 0px ",
                width: "100%",
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
                borderBottom: "1px solid #2b2b2b",
              }}
            >
              <Badge
                badgeContent={state.totalItems}
                color="primary"
                size="large"
                sx={{
                  "& .MuiBadge-badge": {
                    left: 130,
                    top: 13,
                  },
                }}
              >
                <div>PRODUCTS</div>
              </Badge>
              <div style={{ marginLeft: "80px" }}>PRICE</div>
              <div>Quantity</div>
            </Stack>
            {state.items.map((val) => {
              return (
                <CartItem
                  id={val.id}
                  key={val.id}
                  name={val.name}
                  weight={val.weight}
                  img={val.img}
                  flavour={val.flavour}
                  colour={val.colour}
                  price={val.price}
                  quantity={val.quantity}
                  onClick={() => {
                    removeEl(val.id)
                  }}
                />
              )
            })}
          </Stack>
          <Stack
            sx={{
              width: "460px",
              height: "600px",
              border: "2px solid #2b2b2b",
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                padding: "20px 40px ",
                borderBottom: "1px solid #2b2b2b",
              }}
            >
              CART TOTAL
            </div>
            <div className="final-amt">
              <div style={{ display: "flex", alignItems: "center" }}>
                <CurrencyRupeeIcon sx={{ fontSize: "40px" }} />
                {state.totalAmount}
              </div>
              <Typography sx={{ mt: "10px", fontFamily: "Gr" }}>
                *Shipping applied at checkout
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "400px", height: "50px", marginTop: "40px" }}
              >
                PROCEED TO CHECKOUT
              </Button>
            </div>
          </Stack>
        </Stack>
      ) : (
        <>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "100%", height: "120%",pt:"100px" }}
          >
            <AddShoppingCartIcon sx={{ fontSize: "300px" }} />
           <Typography sx={{m:"20px"}}>Cart is Empty</Typography>
            <Link to="/store">
              <Button
                variant="contained"
                sx={{ width: "200px", height: "50px", marginTop: "20px" }}
              >
                Continue Shopping
              </Button>
            </Link>
          </Stack>
        </>
      )}
    </div>
  )
}

export default CartPage
