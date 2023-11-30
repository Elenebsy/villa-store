import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import login from "@mui/icons-material/Login"
import logo from "../Assets/cas.png";
import "./nav.css";
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    ochre: {
      main: '#2D033BF7',
      dark: '#2D033BF7',
      contrastText: '#ffff',
    },
  },
});
function ResponsiveAppBar(props) {
  return (
    <>
      <body>
        <nav>
          <dev className="navleft">
            <img src={logo} alt="logo" />
          </dev>
          <dev className="navright">
            <ul className="links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#login" className="btn">
                  Login
                </a>
              </li>
              <li>
                <a href="#signup" className="btn">
                  Sign Up
                </a>
              </li>
            </ul>
            <dev className="hamburger">
              <DehazeIcon  className="hum" color='secondary'/>
              <dev className="nav-option Home">

                <h1>Home</h1>
              </dev>
              <dev className="nav-option About">
                <h1>About us</h1>
              </dev>
              <dev className="nav-option Contact">
                <h1>Contact</h1>
              </dev>
              <dev className="nav-option Login">
                <h1>Login</h1>
              </dev>
              <dev className="nav-option SignUp">
                <h1>SignUp</h1>
              </dev>
            </dev>
          </dev>
        </nav>
      </body>
    </>
  );
}

export default ResponsiveAppBar;
