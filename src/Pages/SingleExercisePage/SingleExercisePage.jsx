import React from "react"
import "./SingleExercisePage.css"
import ExerciseCards from "../../Components/ExerciseCards/ExerciseCards.jsx"
import { useEffect, useState, useContext, useRef } from "react"
import { useParams } from "react-router-dom"
import { GlobalStateContext } from "../../Context/ExercisesContext.jsx"
import axios from "axios"
import { SvgIcon } from "@mui/material"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"
import AccessibilityIcon from "@mui/icons-material/Accessibility"
import { useNavigate } from "react-router-dom"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import "react-horizontal-scrolling-menu/dist/styles.css"

const SingleExercisePage = () => {
  const { muscle, setMuscle } = useContext(GlobalStateContext)

  const [exData, setExData] = useState({})
  const [error, setError] = useState({})

  const [similarExData, similarsetExData] = useState([])
  const [similarError, similarsetError] = useState({})

  const id = useParams()
  const navigate = useNavigate()

  const [level, setLevel] = React.useState("Beginner")

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext)

    return (
      <div
        className="button-scroll"
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
      >
        <ChevronLeftIcon sx={{ fontSize: "32px", color: "#121212" }} />
      </div>
    )
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext)

    return (
      <div
        className="button-scroll"
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
      >
        <ChevronRightIcon sx={{ fontSize: "32px", color: "#121212" }} />
      </div>
    )
  }

  const handleChange = (e) => {
    setLevel(e.target.value)
  }
  const options1 = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
    headers: {
      "X-RapidAPI-Key": "2c1b97d08fmsh8bbdf7bf499fac5p1b77ddjsnc172ed5ac8b6",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  }

  const options2 = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id.id}`,
    headers: {
      "X-RapidAPI-Key": "2c1b97d08fmsh8bbdf7bf499fac5p1b77ddjsnc172ed5ac8b6",
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
    exerciseDbApi(options2, setExData, setError, "exercises")
    exerciseDbApi(
      options1,
      similarsetExData,
      similarsetError,
      " similar  exercise"
    )
  }, [id])

  return (
    <>
      <div className="container">
        <div>
          <p className="suggest-title">EXERCISES THAT TRAIN THE SAME MUSCLE</p>
          <div className="similar-ex-conatiner">
            <div className="left-spx">
              <ScrollMenu
                style={{}}
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
              >
                {similarExData.map((item) => {
                  return (
                    <ExerciseCards
                      onClick={() => {
                        navigate(`/exercises/${item.id}`)
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth", // This adds smooth scrolling animation
                        })
                      }}
                      key={item.id}
                      bodyPart={item.bodyPart}
                      equipment={item.equipment}
                      gifUrl={item.gifUrl}
                      id={item.id}
                      name={item.name}
                      target={item.target}
                    />
                  )
                })}
              </ScrollMenu>
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
                    onChange={handleChange}
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
                          start with a moderate rep range to build a foundation
                          of strength and muscle endurance.
                        </li>
                        <li>
                          Focus on proper form: Prioritize learning and
                          maintaining correct exercise form to prevent injuries
                          and establish good habits.
                        </li>
                        <li>
                          Perform (2-3) sets per exercise: Keep the volume
                          manageable to avoid overexertion while still promoting
                          progress.
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
                          continually challenge your muscles and avoid plateaus.
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
                          Incorporate higher rep ranges (10-15) for hypertrophy:
                          Cycle in higher-rep sets to promote muscle growth and
                          definition.
                        </li>
                        <li>
                          Implement advanced training techniques: Utilize
                          methods like supersets, drop sets, and pyramids to add
                          variety and intensity to your workouts.
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
    </>
  )
}

export default SingleExercisePage
