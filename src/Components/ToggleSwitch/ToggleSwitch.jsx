import React from "react"
import { styled } from "@mui/material/styles"
import { Switch } from "@mui/material"
import "./ToggleSwitch.css"

// const CustomSwitch = styled(Switch)(({ theme }) => ({
//   "& .MuiSwitch-switchBase.Mui-checked.Mui-uncehcked+.MuiSwitch-track": {
//     backgroundColor: "green",
//   },
// }))

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
}

const ToggleSwitch = ({ dataisOn, handleToggle, left, right }) => {
  return (
    <div className="toggle-switch-conatiner">
      {left}
      <Switch
        sx={{
          "& .MuiSwitch-thumb": {
            backgroundColor: dataisOn ? "lightblue" : "pink",
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
        size="large"
        onChange={handleToggle}
      />
      {right}
    </div>
  )
}

export default ToggleSwitch
