import React, { Component } from 'react';
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
    )
  }
}
