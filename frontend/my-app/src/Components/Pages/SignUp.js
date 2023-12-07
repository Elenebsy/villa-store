import React, { useState } from "react";
import About from './About.js';
import Contact from './Contact.js';
import Login from './Login.js';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
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

import { createTheme ,ThemeProvider} from '@mui/material/styles';
async function addUser(userData) {
 try {
     const response = await axios.post('http://127.0.0.1:5000/adduser', userData);
     console.log(response.data);
 } catch (error) {
     console.error('Error:', error);
 }
 }
const theme = createTheme({
 palette: {
    primary: {
      main: '#7b1fa2',
    },
    secondary: {
      main: '#673ab7',
    },
 },
});


export default function SignUp() {
 const [fullName, setnameState] = useState("");
 const [email, setemailState] = useState("");
 const [password, setpasswordState] = useState("");
 const [phone, setphoneState] = useState("");

 const handleButtonClick = async () => {
    await addUser({
      fullName: fullName,
      email: email,
      password: password,
      phone: phone
    });
 };
createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"element={<About/>}>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

return (
    <ThemeProvider theme={theme}>
 <form>
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
          Sign up
        </Typography>
        <Box
          component="form"
          sx={{ mt: 1 }}
          autoComplete="on"
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullname"
            label="User fullname"
            fullname="name"
            autoComplete="name"
            autoFocus
            onChange={(e)=>setnameState(e.target.value)}
          />
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
            onChange={(e)=>setemailState(e.target.value)}
            //onChange={handleChange}
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
            //onChange={handleChange}
            onChange={(e)=>setpasswordState(e.target.value)}
          />
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone_number"
            label="Phone_Number"
            type="phone"
            id="phone"
            autoComplete="current-password"
            //onChange={handleChange}
            onChange={(e)=>setphoneState(e.target.value)}
          />
        <Button onClick={handleButtonClick} type="submit" sx={{ marginTop: 3 }} color="primary" variant="outlined" size="large">SignUp</Button>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {/* {isInvalid && (
            <Box sx={{ color: "red" }}>
              {"Please enter email and password."}
            </Box>
          )} */}

          {/* {!!error && <Box sx={{ color: "red" }}>{error.message}</Box>} */}
          
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
  
      </Box>
      
    </Container>
    </form>
    </ThemeProvider>
  );
}