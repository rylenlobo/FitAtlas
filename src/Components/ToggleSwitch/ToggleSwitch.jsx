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

const ToggleSwitch = ({ sx, handleToggle, left, right }) => {
  return (
    <div className="toggle-switch-conatiner">
      {left}
      <Switch
        sx={sx}
        size="large"
        onChange={handleToggle}
      />
      {right}
    </div>
  )
}

export default ToggleSwitch
