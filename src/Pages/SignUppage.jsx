import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        FitAtlas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#121212",
    },
  },
});

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  console.log(user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", { ...user });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  onChange={handleChange}
                  label="First Name"
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
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="off"
                  onChange={handleChange}
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoComplete="off"
                  id="email"
                  label="Email Address"
                  onChange={handleChange}
                  name="email"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  onChange={handleChange}
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
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/login"
                  sx={{ fontFamily: "sans-serif", fontSize: " 0.875rem" }}
                >
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, color: "white" }} />
      </Container>
    </ThemeProvider>
  )
}
