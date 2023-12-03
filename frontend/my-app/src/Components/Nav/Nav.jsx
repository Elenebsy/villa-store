import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import logo from "../Assets/cas.png";
import {NavLink} from "react-router-dom"
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
                <NavLink to="/"className="lk">Home</NavLink>
              </li>
              <li>
                <NavLink to ="/about"className="lk">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact"className="lk">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login"className="lk">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register"className="lk">
                  Sign Up
                </NavLink>
              </li>
            </ul>
         
            <dev className="hamburger">
              <DehazeIcon  className="hum" color='secondary'/>
              <dev className="nav-option Home">

              </dev>
            </dev>
          </dev>
        </nav>
      </body>
    </>
  );
}

export default ResponsiveAppBar;
