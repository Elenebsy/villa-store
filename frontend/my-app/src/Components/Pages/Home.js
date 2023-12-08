import { NavLink } from "react-router-dom";
import "../Categories/CategoryTitleDesign.css";
import React, { Component } from 'react'
import Search from '../Search-Bar/Search'
import Footer from '../Footer/Footer'
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <div className="HomeBody">
            <h1 className='hmada'>
         What's are you looking for!
            </h1> 
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
        <div className='h'>
          <Search />
        </div>
        <Footer />
      </div>
    );

  }
}
