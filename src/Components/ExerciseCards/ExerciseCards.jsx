import React from 'react'
import  "./ExerciseCards.css"

const ExerciseCards = ({key, bodyPart, equipment, gifUrl, id, name, target }) => {
  return (
    <>
      <div className="card" key={key}>
        <p className="ex-name" id={id}>
          {name}
        </p>
        <img src={gifUrl} className="ex-img" id={id} />
        <div className="info-muscles" id={id}>
          <div className="bodyPart" id={id}>
            {bodyPart}
          </div>
          <div className="targetMuscles" id={id}>
            {target}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExerciseCards
