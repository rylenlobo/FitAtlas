import React from "react"
import MuscleLayout from "../../Components/MuscleLayout/MuscleLayout.jsx"
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch.jsx"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import MaleSharpIcon from "@mui/icons-material/MaleSharp"
import FemaleSharpIcon from "@mui/icons-material/FemaleSharp"
import { createContext } from "react"
import ExercisePage from "../../Pages/ExercisesPage.jsx"

// export const UserContext = React.createContext()
const Home = () => {
  const [muscle, setMuscle] = useState(null)
  const navigate = useNavigate()

  const [isOn, setIsOn] = useState(true)
  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  const handleClick = (e) => {
    setMuscle(e.currentTarget.id)
    console.log(muscle)
    
  }
console.log(muscle)

  return (
    <>
      <ToggleSwitch
        sx={{
          "& .MuiSwitch-thumb": {
            backgroundColor: isOn ? "lightblue" : "pink",
          },
          "& .MuiSwitch-track": {
            backgroundColor: "lightblue",
          },
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "pink",
          },
          "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
            backgroundColor: "pink",
          },
        }}
        dataisOn={isOn}
        handleToggle={toggleSwitch}
        left={
          <div>
            <MaleSharpIcon style={{ color: "lightblue", fontSize: "32px" }} />
          </div>
        }
        right={
          <div>
            <FemaleSharpIcon style={{ color: "pink", fontSize: "32px" }} />
          </div>
        }
      />

      <MuscleLayout condition={isOn} onClick={handleClick} />
      {/* <UserContext.Provider value={muscle}>
        <ExercisePage />
      </UserContext.Provider> */}
    </>
  )
}

export default Home
