import React, { useState, useEffect, useReducer } from "react"
import { GlobalStateContext } from "../../Context/Context.jsx"
import { useContext } from "react"
import "../../Pages/CartPage/CartPage.css"
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

export const CartItem = (props) => {
  const { incrementItem, decrementItem } = useContext(GlobalStateContext)

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
            <h2 style={{ width: "50px" }}>{props.name}</h2>
            <p>{props.flavour}</p>
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
                <CurrencyRupeeIcon />
                {props.price}
              </p>
            </div>

            <div>
              <CartCounter
                count={props.quantity}
                id={props.id}
                incrementItem={() => {
                  incrementItem(props.id)
                }}
                decrementItem={() => {
                  decrementItem(props.id)
                }}
              />
            </div>
          </Stack>
          {/* <div className="total-price">
            <CurrencyRupeeIcon />
            {props.price[props.weight.indexOf(weight)]*props.quantity}
          </div> */}
          <div style={{ margin: "0px", cursor:"pointer" }} onClick={props.onClick}>
            <DeleteIcon color="error" />
          </div>
        </Stack>
      </Stack>
    </>
  )
}

export const CartCounter = (props) => {
  return (
    <>
      <ButtonGroup size="small" variant="contained" sx={{ boxShadow: "none" }}>
        <Button
          onClick={props.decrementItem}
          disabled={props.count === 1}
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
          {props.count}
        </div>
        <Button
          onClick={props.incrementItem}
          sx={{
            borderRadius: "5px",
            "&.Mui-disabled": {
              backgroundColor: "grey",
            },
          }}
          disabled={props.count === 5}
        >
          <AddIcon sx={{ fontSize: "20px" }} />
        </Button>
      </ButtonGroup>
    </>
  )
}
