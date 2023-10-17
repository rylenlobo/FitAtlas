import * as React from "react"
import { useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Toast from "../Components/Toast/Toast"

function Copyright(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        FitAtlas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme()

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const [open, setOpen] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        email,
        password,
      })
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      // console.log(res);
      navigate("/store")
    } catch (error) {
      setError(error.response.data)
      setOpen(true)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <Toast open={open} close={handleClose} type="error">
        {error.message}
      </Toast>

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#4c7abb" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={"Email Address"}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                autoComplete="off"
                InputProps={{
                  sx: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover ": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#4c7abb",
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="off"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  sx: {
                    color: "white",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover ": {
                    borderColor: "white",
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: "#4c7abb",
                    },
                  },
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    sx={{ border: "white" }}
                    defaultChecked
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  )
}
