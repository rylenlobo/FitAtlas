import React from "react"
import { phcartItems } from "../../Context/Context"
import { Stack } from "@mui/material"
import ProductCard from "../../Components/ProductCard/ProductCard.jsx"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Drawer from "@mui/material/Drawer"
import { GlobalStateContext } from "../../Context/Context"
import { useContext } from "react"
import { preworkoutArr } from "../../utils/DummyData.jsx"
//pretteir-ignore

const SingleProductPage = () => {
  const [open, setOpen] = useState(false)
  const { addToCart } = useContext(GlobalStateContext)
  const category = useParams()

  return (
    <>
      <Stack alignItems="center" sx={{ fontSize: "20px", color: "#4c7abb" }}>
        <h1>{category.category.toUpperCase()}</h1>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        useFlexGap
        spacing={7}
        sx={{ width: "100%", padding: "0px 50px" }}
      >
        {preworkoutArr.filter((item) => item.category === category.category).map((item) => {
          return (
            <ProductCard
            key = {item.id}
              props={item}
              onClick={() => {
                addToCart(item)
              }}
            />
          )
        })}
      </Stack>
    </>
  )
}
export default SingleProductPage
