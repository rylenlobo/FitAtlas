// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { GlobalStateContext } from "../../Context/ExercisesContext.jsx"
import ExerciseCards from "../../Components/ExerciseCards/ExerciseCards.jsx"
import "./ExercisesPage.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion"
import { Skeleton } from "@mui/material"
import Box from "@mui/material/Box"

const ExercisesPage = () => {
  const { muscle, setMuscle } = useContext(GlobalStateContext)
  const navigate = useNavigate()
  const [exData, setExData] = useState([])
  const [error, setError] = useState({})

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
    headers: {
      "X-RapidAPI-Key": "2c1b97d08fmsh8bbdf7bf499fac5p1b77ddjsnc172ed5ac8b6",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  }

  async function exerciseDbApi(options) {
    try {
      const res = await axios.request(options)
      setExData(res.data)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    exerciseDbApi(options)
  }, [])

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {exData ? (
        <>
          <h3 className="title">
            EXERCISES FOR <span>{muscle.toUpperCase()}</span>
          </h3>
          <div className="card-container">
            {exData.map((item) => {
              return (
                <ExerciseCards
                  onClick={() => {
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
              )
            })}
          </div>
        </>
      ) : (
        <>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={40}
            height={40}
            sx={{ backgroundColor: "#fff" }}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={40}
            height={40}
            sx={{ backgroundColor: "#fff" }}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={40}
            height={40}
            sx={{ backgroundColor: "#fff" }}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={40}
            height={40}
            sx={{ backgroundColor: "#fff" }}
          />
        </>
      )}
    </>
  )
}

export default ExercisesPage
