import React from "react"
import "./SingleExercisePage.css"
import "./loader.css"
import ExerciseCards from "../../Components/ExerciseCards/ExerciseCards.jsx"
import { useEffect, useState, useContext, useRef, useCallback } from "react"
import { useParams } from "react-router-dom"
import { GlobalStateContext } from "../../Context/Context.jsx"
import axios from "axios"
import { SvgIcon } from "@mui/material"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"
import AccessibilityIcon from "@mui/icons-material/Accessibility"
import { useNavigate } from "react-router-dom"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import CircularProgress from "@mui/material/CircularProgress"

const SingleExercisePage = () => {
  const { muscle, setMuscle } = useContext(GlobalStateContext)

  const [exData, setExData] = useState({})
  const [error, setError] = useState({})

  const [similarExData, similarsetExData] = useState(null)
  const [similarError, similarsetError] = useState(null)

  const id = useParams()
  const navigate = useNavigate()

  const [level, setLevel] = React.useState("Beginner")

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  })

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const options1 = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
    headers: {
      "X-RapidAPI-Key": "9942d116d8msh2f911ae9e9e8b31p1b8232jsn065cbf72ed02",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  }

  const options2 = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id.id}`,
    headers: {
      "X-RapidAPI-Key": "9942d116d8msh2f911ae9e9e8b31p1b8232jsn065cbf72ed02",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  }

  async function exerciseDbApi(options, exdata, exerror, val) {
    try {
      const res = await axios.request(options)
      exdata(res.data)
      console.log(`called ${val}`)
    } catch (err) {
      exerror(err)
      console.log(err)
    }
  }

  useEffect(() => {
    exerciseDbApi(options2, setExData, setError)
    exerciseDbApi(options1, similarsetExData, similarsetError)
  }, [id])

  return (
    <>
      {exData && similarExData ? (
        <div className="container">
          <div>
            <p className="suggest-title">
              EXERCISES THAT TRAIN THE SAME MUSCLE
            </p>
            <div className="similar-ex-conatiner">
              <div
                className="buttonLeft"
                onClick={() => {
                  scrollPrev()
                }}
              >
                <ChevronLeftIcon sx={{ fontSize: "32px", color: "black" }} />
              </div>
              <div className="left-spx">
                <div className="embla-exercise" ref={emblaRef}>
                  <div className="embla__container-exercise">
                    {similarExData.map((item) => {
                      return (
                        <div className="embla__slide-exercise" key={item.id}>
                          <ExerciseCards
                            onClick={() => {
                              setExData(null)
                              window.scroll({ top: 0 })
                              navigate(`/exercises/${item.id}`)
                            }}
                            key={item.id}
                            bodyPart={item.bodyPart}
                            equipment={item.equipment}
                            gifUrl={item.gifUrl}
                            id={item.id}
                            name={item.name}
                            target={item.target}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div
                className="buttonLeft"
                onClick={() => {
                  scrollNext()
                }}
              >
                <ChevronRightIcon sx={{ fontSize: "32px", color: "black" }} />
              </div>
            </div>
          </div>
          <div className="right-ex-cont">
            <div className="top">
              <div className="top-left">
                <div className="img-container">
                  <img src={exData.gifUrl} />
                </div>
              </div>
              <div className="top-right">
                <div className="exname">
                  <div>{exData.name}</div>
                </div>
                <div className="ex-bodyPart">
                  <AccessibilityIcon sx={{ fontSize: 32, color: "grey" }} />
                  <div>{exData.bodyPart}</div>
                </div>
                <div className="ex-equipment">
                  <FitnessCenterIcon sx={{ fontSize: 32, color: "grey" }} />
                  <div>{exData.equipment}</div>
                </div>
                <div className="ex-target">
                  <TrackChangesIcon sx={{ fontSize: 32, color: "grey" }} />
                  <div>{exData.target}</div>
                </div>
                <div className="reps-info">
                  <p className="select-level">SELECT LEVEL</p>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                      defaultValue="Beginner"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={level}
                      onChange={(e) => {
                        setLevel(e.target.value)
                      }}
                      sx={{
                        width: 300,
                        color: "white",
                        border: "1px solid grey",
                        marginTop: "0",
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      <MenuItem value="Beginner">Beginner</MenuItem>
                      <MenuItem value="Intermidiate">Intermidiate</MenuItem>
                      <MenuItem value="Advanced">Advanced</MenuItem>
                    </Select>
                  </FormControl>
                  <div>
                    {level === "Beginner" ? (
                      <div className="reps">
                        <ul>
                          <li>
                            Aim for (8-12) repetitions per set: Beginners should
                            start with a moderate rep range to build a
                            foundation of strength and muscle endurance.
                          </li>
                          <li>
                            Focus on proper form: Prioritize learning and
                            maintaining correct exercise form to prevent
                            injuries and establish good habits.
                          </li>
                          <li>
                            Perform (2-3) sets per exercise: Keep the volume
                            manageable to avoid overexertion while still
                            promoting progress.
                          </li>
                        </ul>
                      </div>
                    ) : null}
                    {level === "Intermidiate" ? (
                      <div className="reps">
                        <ul>
                          <li>
                            Utilize a range of (6-10) reps per set: Intermediate
                            individuals can vary rep ranges to target different
                            aspects of strength and hypertrophy.
                          </li>
                          <li>
                            Periodize your training: Incorporate periodization
                            techniques, such as progressive overload, to
                            continually challenge your muscles and avoid
                            plateaus.
                          </li>
                          <li>
                            Perform (3-4) sets per exercise: Increase the volume
                            slightly to stimulate muscle growth and enhance
                            strength gains.
                          </li>
                        </ul>
                      </div>
                    ) : null}
                    {level === "Advanced" ? (
                      <div className="reps">
                        <ul>
                          <li>
                            Employ lower rep ranges (1-5) for strength: Focus on
                            heavy weights and lower reps to maximize strength
                            gains.
                          </li>
                          <li>
                            Incorporate higher rep ranges (10-15) for
                            hypertrophy: Cycle in higher-rep sets to promote
                            muscle growth and definition.
                          </li>
                          <li>
                            Implement advanced training techniques: Utilize
                            methods like supersets, drop sets, and pyramids to
                            add variety and intensity to your workouts.
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="load-container">
          <CircularProgress color="inherit" />
        </div>
      )}
    </>
  )
}

export default SingleExercisePage
