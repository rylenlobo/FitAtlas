import React from "react"
import MuscleLayout from "../../Components/MuscleLayout/MuscleLayout.jsx"
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import MaleSharpIcon from "@mui/icons-material/MaleSharp"
import FemaleSharpIcon from "@mui/icons-material/FemaleSharp"
import { GlobalStateContext } from "../../Context/Context.jsx"
import { motion, AnimatePresence } from "framer-motion"

import { Tooltip } from "@mui/material"

const Home = () => {
  const { muscle, setMuscle } = useContext(GlobalStateContext)
  const navigate = useNavigate()

  const [isOn, setIsOn] = useState(true)
  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  const handleClick = (e) => {
    setMuscle(e.currentTarget.getAttribute("data-muscle-type"))
    navigate("/exercises")
  }

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
            <Tooltip title="Male">
              <MaleSharpIcon
                style={{ color: isOn ? "lightblue" : "grey", fontSize: "32px" }}
              />
            </Tooltip>
          </div>
        }
        right={
          <div>
            <Tooltip title="Female">
              <FemaleSharpIcon
                style={{ color: isOn ? "grey" : "pink", fontSize: "32px" }}
              />
            </Tooltip>
          </div>
        }
      />

      <MuscleLayout condition={isOn} onClick={handleClick} />
    </>
  )
}

export default Home
