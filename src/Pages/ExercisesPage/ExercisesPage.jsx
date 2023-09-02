// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { GlobalStateContext } from "../../Context/ExercisesContext.jsx"
import ExerciseCards from "../../Components/ExerciseCards/ExerciseCards.jsx"
import "./ExercisesPage.css"
import axios from "axios"

const ExercisesPage = () => {
  const { muscle, setMuscle } = useContext(GlobalStateContext)

  const [exData, setExData] = useState([])
  const [error, setError] = useState({})

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
      console.log(exData)
    } catch (err) {
      setError(err)
      console.error(error)
    }
  }

  useEffect(() => {
    exerciseDbApi(options)
  }, [])

  return (
    <>
      <h1>{import.meta.env.VITE_KEY}</h1>
      {exData ? (
        <>
          <h3 className="title">EXERCISES FOR <span>{muscle.toUpperCase()}</span></h3>
          <div className="card-container">
            {exData.map((item) => {
              return (
                <ExerciseCards
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
        <h1>{error.error}</h1>
      )}
    </>
  )
}

export default ExercisesPage
