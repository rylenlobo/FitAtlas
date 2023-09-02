// eslint-disable-next-line no-unused-vars
import React from "react"
import { useContext } from "react"
import {GlobalStateContext} from "../Context/ExercisesContext.jsx";
import ExerciseCards from "../../Components/ExerciseCards/ExerciseCards.jsx"

const exercises = [
  {
    bodyPart: "upper arms",
    equipment: "band",
    gifUrl: "https://api.exercisedb.io/image/irV8OHVBDHejkX",
    id: "0968",
    name: "band alternating biceps curl",
    target: "biceps",
  },
  {
    bodyPart: "upper arms",
    equipment: "band",
    gifUrl: "https://api.exercisedb.io/image/XX1QJqF4wWrinn",
    id: "0976",
    name: "band concentration curl",
    target: "biceps",
  },
]

const ExercisesPage = () => {
  const {muscle, setMuscle} = useContext(GlobalStateContext);

  return (
    <div className="card-container">
      {exercises.map((item) => {
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
  )
}

export default ExercisesPage
