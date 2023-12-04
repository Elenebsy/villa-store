import React, { Component } from 'react'
import Nav from'../Nav/Nav.jsx'
import "./about.css"
/*export default class About extends Component {
  render() {
    return (
   <h1>About</h1>
    )
  }
}*/
const About = () => {







  return (
    <div className='container'>
    <div className='aboutMain'><p>About Us</p></div>
    <div className='aboutText'>
      <p>"Cairo Haven" company was established in 2023 in order to help investors and young people find their own haven in Egypt. The company offers many opportunities for all groups and those with low and middle incomes so that everyone can search for their favorite place at appropriate prices and also to support all groups of youth through the interest-free installment system.</p>
    </div>
    <div className='imageContainer'>Cairo Haven</div>
    
  </div>
);
}
export default About;