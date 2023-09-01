// eslint-disable-next-line no-unused-vars
import React from "react"
import { useContext } from "react"
import {GlobalStateContext} from "../Context/ExercisesContext.jsx";
 

const ExercisesPage = () => {

  const {muscle, setMuscle} = useContext(GlobalStateContext);
 
  return (
    <div>{muscle}</div>
  )
}

export default ExercisesPage
