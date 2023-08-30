import React from "react"
import MuscleLayout from "../../Components/MuscleLayout/MuscleLayout.jsx"
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch.jsx"
import { useState } from "react"

import MaleSharpIcon from "@mui/icons-material/MaleSharp"
import FemaleSharpIcon from "@mui/icons-material/FemaleSharp"

const Home = () => {

  const [isOn, setIsOn] = useState(true)
  const toggleSwitch = () => setIsOn(!isOn)

 
  return (
    <>
      <ToggleSwitch
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
      <MuscleLayout condition={isOn} />
    </>
  )
}

export default Home
