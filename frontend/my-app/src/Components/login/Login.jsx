import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import AxiosContext from "../../Services/context";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

export default function SignIn() {
  const navigate = useNavigate();
  const [{ email, password, error }, setSignInFormState] = React.useState(
    INITIAL_STATE
  );
  const axios = React.useContext(AxiosContext);

  const isInvalid = password === "" || email === "";

  const handleChange = (event) => {
    const { name, value } = event.target;
    let error = null;
  
    if (name === 'email') {
      // Email validation using a simple regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Invalid email address';
      }
    }
  
    setSignInFormState((prev) => ({ ...prev, [name]: value, error }));
  };
  const handleSubmit = (event) => {
    axios
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSignInFormState(INITIAL_STATE);
        navigate("/home");
      })
      .catch((error) => {
        if (error.response?.data?.error)
          error.message = error.response.data.error + " - " + error.message;
        setSignInFormState((prev) => ({ ...prev, error: error }));
      });

    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          sx={{ mt: 1 }}
          onSubmit={handleSubmit}
          autoComplete="on"
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {isInvalid && (
            <Box sx={{ color: "red" }}>
              {"Please enter email and password."}
            </Box>
          )}
          {!!error && <Box sx={{ color: "red" }}>{error.message}</Box>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
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
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
