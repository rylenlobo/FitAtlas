import React, { useState, useCallback, useEffect } from "react"
import ProductCard from "../../Components/ProductCard/ProductCard"
import "./Store.css"
import img from "../../../public/Fitness Gym Supplement - Ghost Burn Mango_copy.jpeg"
import img2 from "../../../public/Screenshot 2023-09-15 234611.png"
import img3 from "../../../public/11.png.webp"
import img4 from "../../../public/pexels-pixabay-39308.jpg"
import img5 from "../../../public/64ee941cd81415ffca92a72e_c0b8676f-6a21-47ba-b16e-b1f75e269a65.jpg"
import useFetch from "../../utils/useFetch.jsx"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import OffersHeroBanner from "../../Components/OffersHeroBanner/OffersHeroBanner"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import Button from "@mui/material-next/Button"
import { useNavigate } from "react-router-dom"

const Store = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
    })
  }, [])

  const navigate = useNavigate()

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  ])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  // const [maxPrice, setMaxPrice] = useState(1500)

  // const { data, loading, error, reFetch } = useFetch(
  //   "http://localhost:8800/api/product/"
  // )

  // const handleRange = (e) => {
  //   setMaxPrice(e.target.value)

  //   reFetch(`http://localhost:8800/api/product?max=${maxPrice}`)
  // }

  return (
    <>
      <div className="product-page-container">
        <div className="banner-container">
          <div
            className="left"
            onClick={() => {
              scrollPrev()
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </div>
          <div className="embla-b" ref={emblaRef}>
            <div className="embla__container-b">
              <div className="embla__slide-b">
                <OffersHeroBanner
                  title={" Welcome to FitAtlas!🚀".toUpperCase()}
                  description={
                    <>
                      <p>
                        {" "}
                        Are you new here? {"We've"} got an exclusive offer just
                        for you. Enjoy a 15% discount on your first purchase.
                        Start your fitness journey with top-quality supplements
                        from FitAtlas today!
                      </p>
                      <h2>
                        USE CODE : <span>WELCOME15</span>
                      </h2>
                    </>
                  }
                  img={img4}
                  component={
                    <button
                      onClick={() => {
                        window.scrollTo({
                          top: 600,
                          behavior: "smooth", // This adds smooth scrolling animation
                        })
                      }}
                    >
                      Shop now <ChevronRightIcon />
                    </button>
                  }
                />
              </div>
              <div className="embla__slide-b">
                <HeroBanner
                  title={"GHOST LEGEND®"}
                  description={
                    "V3 pre-workout offers 30 single-scoop servings, combining a globally-compliant stand out energy & focus formula, with premium pump ingredients and authentic flavor collabs to get you feeling like a legend whenever you need it most."
                  }
                  img={img}
                  component={"Limited Series"}
                />
              </div>
              <div className="embla__slide-b">
                <HeroBanner
                  title={"STIM DADDY & PUMP DADDY®"}
                  description={
                    "Ryse presents the follow up to Noel Deyzel’s Signature Series STIM DADDY & PUMP DADDY High-Stimulant Pre-Workout. The father of stims has arrived and packs a punch like never before with 21+ grams of active ingredients designed specifically for intense energy, lasered in focus, and euphoric mood. If you’re a stimulant junkie, look no further, but don’t say we didn’t warn you first."
                  }
                  img={img2}
                  component={"Available in 2 Flavors"}
                />
              </div>
              <div className="embla__slide-b">
                <HeroBanner
                  title={"BLACKMARKET PRE-WORKOUT"}
                  description={
                    "Blackmarket Labs' Pre-Workout Supplements are meticulously crafted to ignite your workout with a potent blend of energy-boosting ingredients, enhancing focus and endurance. Elevate your fitness game and push your limits with these performance-enhancing formulations."
                  }
                  img={img3}
                  component={"Available now"}
                />
              </div>
              <div className="embla__slide-b">
                <HeroBanner
                  title={"CREATINE MONOHYDRATE"}
                  description={
                    "Creatine is stored in the muscle as creatine phosphate. Those familiar know ATP, cellular energy, is adenosine triphosphate. There’s something special about those phosphates. When they are clipped off the parent molecule, they release a ton of energy. The cell is able to harvest this energy and put it to work. In the muscle, this powers muscle contractions."
                  }
                  img={img5}
                  component={"Available now"}
                />
              </div>
            </div>
          </div>
          <div
            className="right"
            onClick={() => {
              scrollNext()
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </div>
        </div>
        <div>
          <div className="categories">
            <h1>CATEGORIES</h1>
          </div>
          <div className="catergory-container">
            <div className="catergory-container-top">
              <div className="catergory-container-top-left">
                <div
                  className="wp"
                  onClick={() => navigate("/store/whey-protein")}
                >
                  <button className="btn">Protein</button>
                  <img src="../../../public/RYSE_Protein_1000x.jpg" alt="" />
                </div>
                <div
                  className="pw"
                  onClick={() => navigate("/store/preworkout")}
                >
                  <button className="btn">Pre-workout</button>
                  <img src="../../../public/pre-grid_1000x.jpg" alt="" />
                </div>
              </div>
              <div className="category-container-top-right">
                <div
                  className="sv"
                  onClick={() => navigate("/store/Supplement")}
                >
                  <button className="btn">Supplements & Vitamins</button>
                  <img
                    src="../../../public/pexels-photo-15120890.webp"
                    alt=""
                  />
                </div>
                <div
                  className="acc"
                  onClick={() => navigate("/store/accessories")}
                >
                  <button className="btn">Accerssories</button>
                  <img
                    src="../../../public/TxcPGpjU63shVW3myUE3b8.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="catergory-conatiner-bottom">
              <div
                className="all-eq"
                onClick={() => navigate("/store/equipment")}
              >
                <div>
                  <button className="btn">ALL EQUIPMENTS</button>
                  <img
                    src="../../../public/workout-equipment-for-home-gym-checklist-4619-1653930236466.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="eq">
                <div
                  className="a"
                  onClick={() => navigate("/store/kettlebells")}
                >
                  <button className="btn">kettlebells</button>
                  <img src="../../../public/1.jpg" alt="" />
                </div>
                <div
                  className="b"
                  style={{ marginLeft: "30px", marginRight: "30px" }}
                  onClick={() => navigate("/store/dumbells")}
                >
                  <button className="btn">Dumbells</button>
                  <img src="../../../public/2.jpg" alt="" />
                </div>
                <div
                  className="c"
                  onClick={() => navigate("/store/resistant-bands")}
                >
                  <button className="btn">resistant bands</button>
                  <img src="../../../public/3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="trending">
            <h1>TRENDING NOW</h1>
          </div>
          <div className="trending-container">
            <div className="trending-supplements">Supplememts</div>
            <div className="trending-equipments">Equipments</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Store

// <div className="products">
//     <div className="left">
//       <div className="filterItem">
//         <h2>Filter By Type</h2>
//         <div className="inputItem">
//           <input type="radio" id="product" value="product" name="price" />
//           <label htmlFor="product">Products</label>
//         </div>
//         <div className="inputItem">
//           <input type="radio" id="equipment" value="equipment" name="price" />
//           <label htmlFor="equipment">Equipments</label>
//         </div>
//       </div>
//       <div className="filterItem">
//         <h2>Filter By Categories</h2>
//         <div className="inputItem">
//           <input type="checkbox" id="1" value={1} />
//           <label htmlFor="1">Resistance Band</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="2" value={2} />
//           <label htmlFor="2">Barbell</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="3" value={3} />
//           <label htmlFor="3">Dumbbell</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="4" value={4} />
//           <label htmlFor="4">Roller</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="5" value={5} />
//           <label htmlFor="5">Rope</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="6" value={6} />
//           <label htmlFor="6">Trap bar</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="7" value={7} />
//           <label htmlFor="7">Stationary Bike</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="8" value={8} />
//           <label htmlFor="8">Stepmill Machine</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="9" value={9} />
//           <label htmlFor="9">Wheel Roller</label>
//         </div>
//         <div className="inputItem">
//           <input type="checkbox" id="10" value={10} />
//           <label htmlFor="10">Medicine Ball</label>
//         </div>
//       </div>
//       <div className="filterItem slider">
//         <h2>Filter By price</h2>
//         <span>0</span>
//         <input type="range" min={0} max={1500} onChange={handleRange} />
//         <span>{maxPrice}</span>
//       </div>
//     </div>
//     <div className="right">
//       {loading ? (
//         "Loading"
//       ) : (
//         <>
//           {data.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </>
//       )}
//     </div>
//   </div>
