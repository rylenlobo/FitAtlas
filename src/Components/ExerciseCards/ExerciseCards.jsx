import React from "react"
import "./ExerciseCards.css"

const ExerciseCards = ({
  onClick,
  key, 
  bodyPart,
  equipment,
  gifUrl,
  id,
  name,
  target,
}) => {
  return (
    <>
      <div className="card" key={key} onClick={onClick} id={id}>
        <p className="ex-name" >
          {name}
        </p>
        <img src={gifUrl} className="ex-img" />
        <div className="info-muscles" >
          <div className="bodyPart" >
            {bodyPart}
          </div>
          <div className="targetMuscles" >
            {target}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExerciseCards
