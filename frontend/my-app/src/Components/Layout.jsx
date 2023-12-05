import React from 'react'
import Nav from './Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
   <>
   <Nav/>
   <Outlet/>
   </>
  )
}
