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

const CartCounter = ({ count, id }) => {
  const { state, removeEl, incrementItem, decrementItem } =
    useContext(GlobalStateContext)
  return (
    <>
      <ButtonGroup
        size="small"
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => {
            decrementItem(id)
          }}
          disabled={count === 1}
          sx={{
            borderRadius: "5px",
            "&.Mui-disabled": {
              backgroundColor: "grey",
            },
          }}
        >
          <RemoveIcon sx={{ fontSize: "20px" }} />
        </Button>
        <div
          style={{
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "2px solid grey",
            borderBottom: "2px solid grey",
          }}
        >
          {count}
        </div>
        <Button
          onClick={() => {
            incrementItem(id)
          }}
          sx={{
            borderRadius: "5px",
            "&.Mui-disabled": {
              backgroundColor: "grey",
            },
          }}
          disabled={count === 5}
        >
          <AddIcon sx={{ fontSize: "20px" }} />
        </Button>
      </ButtonGroup>
    </>
  )
}

const CartItem = (props) => {
  const { state, removeEl, incrementItem, decrementItem } =
    useContext(GlobalStateContext)
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
        sx={{
          boxSizing: "border-box",
          flex: "0 0 0",
          borderBottom: "1px solid #2b2b2b",
          padding: "0 50px 50px 50px",
        }}
      >
        <div className="cart-img">
          <img src={props.img} />
        </div>
        <Stack
          direction="row"
          alignItems="start"
          justifyContent="space-between"
          width="100%"
        >
          <div className="cart-items-details">
            <h2>{props.name.toUpperCase()}</h2>
            <p>{props.flaviur}</p>
            <p>{props.weight}</p>
          </div>
          <Stack
            direction="row"
            alignItems="start"
            justifyContent="space-between"
            sx={{ width: "300px" }}
          >
            <div>
              <p className="price-cart">
                <CurrencyRupeeIcon  />
                {props.price}
              </p>
            </div>
            <div>
              <CloseIcon />
            </div>
            <div>
              <CartCounter count={props.quantity} id={props.id} />
            </div>
          </Stack>
          <div className="total-price">
            <CurrencyRupeeIcon  />
            {props.subtotal}
          </div>
          <div style={{ margin: "0px" }} onClick={props.onClick}>
            <DeleteIcon color="error" />
          </div>
        </Stack>
      </Stack>
    </>
  )
}

const CartPage = () => {
  // const removeEl = (id) => {
  //   const newList = item.filter((item) => item.id !== id)
  //   setItems(newList)
  // }
  const { state, removeEl, incrementItem } = useContext(GlobalStateContext)
  return (
    <div className="cart-page-container">
      {state.items.length !== 0 ? (
        <Stack direction="row" justifyContent="flex-start">
          <Stack
            spacing={5}
            sx={{
              borderRadius: "12px",
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
                <div style={{ marginLeft: "20px" }}>PRODUCTS</div>
              </Badge>
              <div style={{ marginLeft: "80px" }}>PRICE</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </Stack>
            {state.items.map((val) => {
              return (
                <CartItem
                  id={val.id}
                  key={val.id}
                  name={val.name}
                  weight={val.weight}
                  img={val.img}
                  flaviur={val.flaviur}
                  price={val.price}
                  quantity={val.quantity}
                  subtotal={val.subtotal}
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
              borderRadius: "12px",
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
              <Typography sx={{mt:"10px",fontFamily:"Gr"}}>*Shipping applied at checkout</Typography>
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
        "Cart is Empty"
      )}
    </div>
  )
}

export default CartPage
