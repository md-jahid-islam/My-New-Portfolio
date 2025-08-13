 import React from 'react'
 import { Outlet } from 'react-router-dom'
 import Navbar from '../Components/Navbar'
 import FromComponents from '../Components/FromComponents'

 //=========== LayoutOne start =========//
 const LayoutOne = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <FromComponents/>
   </>
  )
 }

 //=========== LayoutOne end ============//
 export default LayoutOne
