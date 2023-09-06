import React from "react"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import Grow from "@mui/material/Grow"


const Toast = ({ open, close }) => {
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={close}
        sx={{ mt: 7, width: "20%" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={Grow}
      >
        <Alert
          onClose={close}
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Invalid Credentials
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Toast
