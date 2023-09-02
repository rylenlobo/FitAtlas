// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { GlobalStateContext } from "../../Context/ExercisesContext.jsx"
import ExerciseCards from "../../Components/ExerciseCards/ExerciseCards.jsx"
import "./ExercisesPage.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion"

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
      "X-RapidAPI-Key": "88b6918b40msh329f31200fccbc9p165531jsn929418cf75f8",
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
                  onClick={() => navigate(`/exercises/${item.id}`)}
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
        <h1 className="title">{error.error}</h1>
      )}
    </>
  )
}

export default ExercisesPage
