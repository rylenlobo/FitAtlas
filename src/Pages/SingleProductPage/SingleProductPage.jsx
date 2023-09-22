import React, { useContext, useReducer } from "react"
import Stack from "@mui/material/Stack"
import { GlobalStateContext } from "../../Context/Context"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import "./SingleProductPage.css"
import { useEffect, useState, useCallback } from "react"
import Rating from "@mui/material/Rating"
import CurrencyRupee from "@mui/icons-material/CurrencyRupee"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { CartCounter } from "../../Components/CartItem.jsx/CartItem"
import Button from "@mui/material/Button"
import { SpReducer } from "../../utils/SpPageReducer.jsx"
import { uid } from "uid"

const phData = {
  id: uid(),
  name: "Godzilla Pre-Workout",
  img: [
    "https://rysesupps.com/cdn/shop/files/pbo_pp_1_500x.png?v=1693970696",
    "https://rysesupps.com/cdn/shop/files/pbo_1_500x.png?v=1693970696",
    "https://rysesupps.com/cdn/shop/files/blackberrylemonade_1_0a448f9c-3bd7-4789-be0c-a39df92d8b20_500x.png?v=1693970696",
    "https://rysesupps.com/cdn/shop/files/strawberrykiwi_1_500x.png?v=1693970037",
  ],
  displayimg: [
    "https://rysesupps.com/cdn/shop/files/pbo_pp_1_500x.png?v=1693970696",
    "https://rysesupps.com/cdn/shop/files/pbo_1_500x.png?v=1693970696",
    "https://rysesupps.com/cdn/shop/files/blackberrylemonade_1_0a448f9c-3bd7-4789-be0c-a39df92d8b20_500x.png?v=1693970696",
    "https://rysesupps.com/cdn/shop/files/strawberrykiwi_1_500x.png?v=1693970037",
    "https://rysesupps.com/cdn/shop/files/ryse-godzillapre-sfp-sk.png?v=1660327032",
  ],
  flavour: [
    "Passion Pineapple",
    "Godzilla Monsterberry Lime",
    "Blackberry Lemonade",
    "Strawberry Kiwi",
  ],
  price: ["5000"],
  desc: `Packing a massive 40g serving size, this giant delivers city-crushing pumps, razor sharp focus & long-lasting explosive energy. Loaded with 12 ingredients, 5 clinically studied trademarks and a delicious blast of flavor, your new favorite pre-workout is ready for battle.`,
  quantity: 1,
  rating: 5,
  weight: ["500gm"],
  type: "Supplement",
  category: "preworkout",
}

const Thumb = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
    </div>
  )
}

const initialState = {
  productData: [phData],
  readOnly: [phData],
}

const SingleProductPage = () => {
  const { addToCart } = useContext(GlobalStateContext)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    axis: "y",
    containScroll: "keepSnaps",
    dragFree: true,
  })

  const [state, dispatch] = useReducer(SpReducer, initialState)

  const selectFlavour = (id, flavour) => {
    dispatch({ type: "SELECT_FLAVOUR", payload: { id, flavour } })
  }

  const selectWeight = (id, weight, price) => {
    dispatch({ type: "SELECT_WEIGHT", payload: { id, weight, price } })
  }

  const incrementItem = (id) => {
    dispatch({ type: "INCREMENT_ITEM", payload: id })
  }

  const decrementItem = (id) => {
    dispatch({ type: "DECREMENT_ITEM", payload: id })
  }

  const initFlavour = state.readOnly[0].flavour
    ? state.readOnly[0].flavour[0]
    : ""
  const [flavour, setFlavour] = React.useState(initFlavour)

  const initWeight = state.readOnly[0].weight[0]
  const [weight, setWeight] = React.useState(initWeight)

  const id = state.readOnly[0].id
  const price = state.readOnly[0].weight.indexOf(weight)

  const handleChange = (event) => {
    setFlavour(event.target.value)
    selectFlavour(id, event.target.value)
  }

  const handleWeight = (event) => {
    setWeight(event.target.value)
    selectWeight(id, event.target.value, price)
  }

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on("select", onSelect)
    emblaMainApi.on("reInit", onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div>
      <Stack
        alignItems="center"
        direction={"row"}
        justifyContent="start"
        spacing={8}
        sx={{ width: "100%", height: "100%", padding: "70px 50px 0 50px" }}
      >
        <Stack direction={"row"} spacing={2} sx={{}}>
          <Stack direction={"column"} sx={{ height: "500px", width: "130px" }}>
            <div className="embla-thumbs">
              <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                <div className="embla-thumbs__container">
                  {state.readOnly[0].displayimg.map((img, index) => (
                    <Thumb
                      onClick={() => onThumbClick(index)}
                      selected={index === selectedIndex}
                      index={index}
                      imgSrc={img}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Stack>
          <Stack
            direction="row"
            spacing={10}
            alignItems="center"
            sx={{ width: "450px", height: "500px" }}
          >
            <div className="embla-sp">
              <div className="embla__viewport" ref={emblaMainRef}>
                <div className="embla__container-sp">
                  {state.readOnly[0].displayimg.map((img, index) => (
                    <div className="embla__slide-sp" key={index}>
                      <img
                        className="embla__slide__img"
                        src={img}
                        alt="Your alt text"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          sx={{
            border: "1px solid #2b2b2b",
            padding: "10px 30px",
            borderRadius: "5px",
          }}
        >
          <div>
            <p style={{ fontSize: "50px", margin: 0 }}>
              {state.readOnly[0].name.toUpperCase()}
            </p>
            <Rating
              readOnly
              defaultValue={state.readOnly[0].rating}
              sx={{ color: "#4c7abb", margin: "15px 0" }}
            />

            <p style={{ fontSize: "30px" }}>
              <CurrencyRupee />
              {state.readOnly[0].price[price]}
            </p>
          </div>
          <Stack
            direction={"row"}
            spacing={10}
            sx={{
              borderTop: "1px solid #2b2b2b",

              padding: "40px 0",
            }}
          >
            {state.readOnly[0].flavour ? (
              <div>
                <p>Flavour</p>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={flavour}
                      onChange={(e) => {
                        handleChange(e)
                      }}
                      sx={{
                        width: "200px",
                        height: "40px",
                        color: "white",
                        border: "1px solid grey",
                        marginTop: "0",
                        marginBottom: "10px",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      {state.readOnly[0].flavour?.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            ) : (
              ""
            )}
            {state.readOnly[0].weight ? (
              <div>
                <p>Weight</p>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={weight}
                      onChange={(e) => {
                        handleWeight(e)
                      }}
                      sx={{
                        width: "200px",
                        height: "40px",
                        color: "white",
                        border: "1px solid grey",
                        marginTop: "0",
                        marginBottom: "10px",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      {state.readOnly[0].weight?.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            ) : (
              ""
            )}
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              width: "100%",
              borderTop: "1px solid #2b2b2b",

              padding: "30px 0",
            }}
            alignItems={"center"}
            justifyContent={"start"}
          >
            <div style={{}}>
              <CartCounter
                count={state.readOnly[0].quantity}
                incrementItem={() => {
                  incrementItem(id)
                }}
                decrementItem={() => {
                  decrementItem(id)
                }}
              />
            </div>
            <div>
              <Button
                sx={{ width: "200px", ml: "60px" }}
                variant="contained"
                onClick={() => {
                  addToCart(state.productData[0])
                }}
              >
                Add To Cart
              </Button>
            </div>
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

export default SingleProductPage
