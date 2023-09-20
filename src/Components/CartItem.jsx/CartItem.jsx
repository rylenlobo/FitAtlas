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
  const { state, removeEl, selectFlavour, selectWeight } =
    useContext(GlobalStateContext)

  const initFlavour = props.flavour ? props.flavour[0] : ""
  const [flavour, setFlavour] = React.useState(initFlavour)
  const [weight, setWeight] = React.useState(props.weight[0])

  const handleChange = (event) => {
    setFlavour(event.target.value)
    selectFlavour(props.id, [event.target.value])
  }

  const handleChangeWeight = (event) => {
    setWeight(event.target.value)

    selectWeight(props.id,event.target.value,props.price[props.weight.indexOf(event.target.value)])
  }

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
          <img
            src={props.img[props.flavour ? props.flavour.indexOf(flavour) : 0]}
          />
        </div>
        <Stack
          direction="row"
          alignItems="start"
          justifyContent="space-between"
          width="100%"
        >
          <div className="cart-items-details">
            <h2 style={{ width: "50px" }}>{props.name}</h2>
            <p>
              {props.flavour?.[0] == "Unflavoured" ? (
                "Unflavoured"
              ) : props.flavour ? (
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={flavour}
                      onChange={(e) => {
                        handleChange(e, props.id)
                      }}
                      sx={{
                        width: "180px",
                        height: "25px",
                        color: "white",
                        border: "1px solid grey",
                        marginTop: "0",
                        marginBottom: "10px",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      {props.flavour?.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              ) : (
                " "
              )}
            </p>

            <p>
              {props.weight.length === 1 ? (
                props.weight[0]
              ) : (
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={weight}
                      onChange={(e) => {
                        handleChangeWeight(e, props.id)
                      }}
                      sx={{
                        width: "100px",
                        height: "25px",
                        color: "white",
                        border: "1px solid grey",
                        marginTop: "0",
                        marginBottom: "10px",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      {props.weight?.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              )}
            </p>
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
                {props.price[props.weight.indexOf(weight)]}
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
            <CurrencyRupeeIcon />
            {props.price[props.weight.indexOf(weight)]*props.quantity}
          </div>
          <div style={{ margin: "0px" }} onClick={props.onClick}>
            <DeleteIcon color="error" />
          </div>
        </Stack>
      </Stack>
    </>
  )
}

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
