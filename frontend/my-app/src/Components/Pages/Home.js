import React, { Component } from 'react'
import Search from '../Search-Bar/Search'
import Footer from '../Footer/Footer'
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <>
      <div className='h'>
      
      <Search/>
      <h1 className='hmada'>
         What's are you looking for!
      </h1> 
      </div>
      <Footer/>
      </>
    )
  }
}
