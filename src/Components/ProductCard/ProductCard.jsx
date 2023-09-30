import React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import Rating from "@mui/material/Rating"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback } from "react"
import { GlobalStateContext } from "../../Context/Context"
import { useContext } from "react"
import { useParams } from "react-router-dom"

const ProductCard = ({ props, onClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [])

  const param = useParams()

  const { stateforCart, setStateforCart } = useContext(GlobalStateContext)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext())
  // console.log(props);

  return (
    <Link to={`/store/${param.category}/${props._id}`} className="link">
      <div className="product-card">
        {props.img.length > 1 ? (
          <div className="embla-pc" ref={emblaRef}>
            <div className="embla__container-pc">
              {props.img.map((img, index) => (
                <div className="embla__slide-pc" key={index}>
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="product-image"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <img src={props?.img[0]} alt={props?.name} className="product-image" />
        )}
        <div className="product-details">
          <h2 className="product-name">{props?.name}</h2>
          <div style={{ margin: "15px 0" }}>
            <Rating
              readOnly
              defaultValue={props.rating}
              sx={{ color: "#4c7abb" }}
            />
            <p>
              {props.type === "equipment"
                ? ""
                : "Available in " + props.flavour.length + " flavour"}
            </p>
          </div>
          <div className="info">
            <p className="product-price">${props.price[0]}</p>
            <button className="add-to-cart-button" onClick={onClick}>
              View now
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
