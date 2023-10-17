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
import { useLocation, useParams } from "react-router-dom"
import { uid } from "uid"
import axios from "axios"

const phData = {
  id: uid(),
  productName: "Blackout: Pre-Workout",
  img: [
    "https://rysesupps.com/cdn/shop/files/ryse_2_1_white_314aca74-a2f6-42c8-a8c9-2ede17c87548_500x.png?v=1694017852",
    "https://rysesupps.com/cdn/shop/files/baja_burst_1_500x.png?v=1694017852",
    "https://rysesupps.com/cdn/shop/files/tigersblood_1_5ceceae2-977d-46b2-8b09-4e85dfb97182_500x.png?v=1694017852",
    "https://rysesupps.com/cdn/shop/files/mangoextreme_1_500x.png?v=1694017852",
  ],
  displayimg: [
    "https://rysesupps.com/cdn/shop/files/ryse_2_1_white_314aca74-a2f6-42c8-a8c9-2ede17c87548_500x.png?v=1694017852",
    "https://rysesupps.com/cdn/shop/files/baja_burst_1_500x.png?v=1694017852",
    "https://rysesupps.com/cdn/shop/files/tigersblood_1_5ceceae2-977d-46b2-8b09-4e85dfb97182_500x.png?v=1694017852",
    "https://rysesupps.com/cdn/shop/files/mangoextreme_1_500x.png?v=1694017852",
    "https://rysesupps.com/cdn/shop/files/nfp-pre-mango.jpg?v=1666310520",
  ],
  flavour: [
    "SunnyD Tangy Original",
    "Baja Burst",
    "Tigers Blood",
    "Mango Extreme",
  ],
  price: ["5000"],
  desc: `Supercharge your most grueling workouts with the all new high performance PROJECT BLACKOUT PRE from RYSE. Packed with our high-stimulant performance matrix and patented pump formula, RYSE PROJECT BLACKOUT will satisfy even the most advanced hardcore athlete.`,
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

const SingleProductPage = () => {
  //add to cart dispatch function
  const { addToCart } = useContext(GlobalStateContext)

  //state  for thumbnail
  const [selectedIndex, setSelectedIndex] = useState(0)
  const location = useLocation()
  const productId = location.pathname.split("/")[3]
  const url = `http://localhost:8800/api/product/find/${productId}`
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url)
      setData(res.data)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    axis: "y",
    containScroll: "keepSnaps",
    dragFree: true,
  })

  const [state, dispatch] = useReducer(SpReducer, {
    productData: [],
    readOnly: [],
  })
  const setSpData = (data) => {
    if (data) {
      setFlavour(data.flavour[0] || "")
      setWeight(data.weight[0] || "")
    }
    dispatch({ type: "SET_DATA", payload: { data } })
  }

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

  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  const Fl = state.readOnly[0]?.flavour ? true : false

  const [flavour, setFlavour] = React.useState(" ")

  const [weight, setWeight] = React.useState(" ")

  useEffect(() => {
    setSpData(data)
  }, [data])

  // const id = state?.readOnly[0]?._id ?? " "

  const handleChange = (event) => {
    setFlavour(event.target.value)

    selectFlavour(state.readOnly[0]._id, event.target.value)
  }

  const handleWeight = (event) => {
    setWeight(event.target.value)
    selectWeight(state.readOnly[0]._id, event.target.value, price)
  }

  //prettier-ignore
  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return emblaMainApi.scrollTo(index)
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

  useEffect(() => {
    console.log(state.productData)
  }, [state.productData])

  const price = state?.readOnly[0]?.weight.indexOf(weight);

  return (
    <>
      {data ? (
        <div>
          <Stack
            alignItems="center"
            direction={"row"}
            justifyContent="start"
            spacing={8}
            sx={{ width: "100%", height: "100%", padding: "70px 50px 0 50px" }}
          >
            <Stack
              direction={"row"}
              spacing={2}
              sx={{
                padding: "30px ",
                border: "1px solid #2b2b2b",
                borderRadius: "5px",
              }}
            >
              <Stack
                direction={"column"}
                sx={{ height: "500px", width: "130px" }}
              >
                <div className="embla-thumbs">
                  <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                    <div className="embla-thumbs__container">
                      {state.readOnly[0]?.displayimg.map((img, index) => (
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
                      {state.readOnly[0]?.displayimg.map((img, index) => (
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
              className="product-info"
              direction={"column"}
              sx={{
                border: "1px solid #2b2b2b",
                width: "800px",
                height: "560px",
                padding: "30px 50px",
                overflow: "scroll",
                borderRadius: "5px",
              }}
            >
              <div>
                <p style={{ fontSize: "50px", margin: 0 }}>
                  {state.readOnly[0]?.productName.toUpperCase()}
                </p>

                <Rating
                  readOnly
                  value={
                    state.readOnly[0]?.rating ? state.readOnly[0]?.rating : 0
                  }
                  sx={{ color: "#4c7abb", margin: "15px 0" }}
                />

                <p style={{ fontSize: "30px" }}>
                  <CurrencyRupee />
                  {state.readOnly[0]?.price[price]}
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
                {state.readOnly[0]?.flavour ? (
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
                          {state.readOnly[0]?.flavour?.map((item, index) => (
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
                {state.readOnly[0]?.weight ? (
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
                          {state.readOnly[0]?.weight?.map((item, index) => (
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
                  borderBottom: "1px solid #2b2b2b",
                  padding: "30px 0",
                }}
                alignItems={"center"}
                justifyContent={"start"}
              >
                <div style={{}}>
                  <CartCounter
                    count={state.readOnly[0]?.quantity}
                    incrementItem={() => {
                      incrementItem(data ? data._id : " ")
                    }}
                    decrementItem={() => {
                      decrementItem(data ? data._id : " ")
                    }}
                  />
                </div>
                <div>
                  <Button
                    sx={{ width: "200px", ml: "60px" }}
                    variant="contained"
                    onClick={() => {
                      //prettier-ignore
                      addToCart(
                    state.productData[0]._id,
                    state.productData[0].productName,
                    Fl? state.productData[0].img[state.readOnly[0].flavour?.indexOf(flavour)]: state.productData[0].img[0],
                    Fl ? state.productData[0].flavour[0] : " ",
                    state.readOnly[0].price[price],
                    state.productData[0].quantity,
                    state.productData[0].weight[0],
                    state.productData[0].type
                  )
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              </Stack>
              <Box>
                <div className="product-description">
                  <h2>Description</h2>
                  <p className={showMore ? "show-more" : ""}>
                    {state.readOnly[0]?.desc}
                  </p>
                  {state.readOnly[0]?.desc.length > 100 && (
                    <button onClick={toggleShowMore}>
                      {showMore ? "Show less" : "Show more"}
                    </button>
                  )}
                </div>
              </Box>
            </Stack>
          </Stack>
        </div>
      ) : (
        <>loading</>
      )}
    </>
  )
}

export default SingleProductPage