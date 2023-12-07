import React, { Component } from 'react';
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import "../Categories/CategoryTitleDesign.css";
export default class Home extends Component {
  render() {
    return (
      <div className="HomeBody">
        <div className="category">
          <div className="categoryTitle">
            <ul className="link">
              <li>
                <NavLink to="/Houses" className="1c">Houses</NavLink>
              </li>
              <li>
                <NavLink to="/Apartments" className="1c">Apartments</NavLink>
              </li>
            </ul>
          </div>
          <div className="categoryProducts">

          </div>
        </div>
      </div>
=======
import Slider from '../slider/Slider.jsx';
export default class Home extends Component {
  render() {
    return (
      <>
      <Slider/>
      <dev>he</dev>
      </>
>>>>>>> ac4ffe532fc14e378cf6f3da3d81ad6022f64b4b
    )
  }
}
