import * as React from "react"
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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
    >
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
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    })
  }

  return (
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
            Login
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
              label="Email Address"
              name="email"
              
              autoFocus
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
              id="password"
              
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
              control={<Checkbox value="remember" sx={{border:"white"}} defaultChecked/>}
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
  )
}
