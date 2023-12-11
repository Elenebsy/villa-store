import React from 'react'
import Nav from './Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer.jsx'

export default function Layout() {
  return (
   <>
   <Nav/>
   <Footer/>
   <Outlet/>
   </>
  )
}
