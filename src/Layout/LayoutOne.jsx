 import React from 'react'
 import { Outlet } from 'react-router-dom'
 import Navbar from '../Components/Navbar'
import FromComponents from '../Components/FromComponents'

 //=========== LayoutOne =========//
 const LayoutOne = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <FromComponents/>
   </>
  )
 }
 export default LayoutOne
