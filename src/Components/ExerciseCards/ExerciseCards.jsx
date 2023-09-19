import React, { Suspense } from "react"
import "./ExerciseCards.css"
import CircularProgress from "@mui/material/CircularProgress"

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
        <p className="ex-name">{name}</p>
        <Suspense fallback={<CircularProgress color="inherit" />}>
          <img src={gifUrl} className="ex-img" />
        </Suspense>

        <div className="info-muscles">
          <div className="bodyPart">{bodyPart}</div>
          <div className="targetMuscles">{target}</div>
        </div>
      </div>
    </>
  )
}

export default ExerciseCards
