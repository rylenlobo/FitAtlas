import React, { Children } from "react"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import Grow from "@mui/material/Grow"


const Toast = ({ open, close, children,type }) => {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={close}
        sx={{ mt: 7, width: "auto" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Grow}
      >
        <Alert
          onClose={close}
          severity={type}
          sx={{ width: "100%" }}
          variant="filled"
        >
         {children}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Toast
