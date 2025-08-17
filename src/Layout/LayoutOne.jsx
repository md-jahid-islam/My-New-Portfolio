 import React from 'react'
 import { Outlet } from 'react-router-dom'
 import Navbar from '../Components/Navbar'
 import FromComponents from '../Components/FromComponents'
 import AppsComponents from '../Components/AppsComponents'

 //=========== LayoutOne start =========//
 const LayoutOne = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <FromComponents/>
   <AppsComponents/>
   </>
  )
 }

 //=========== LayoutOne end ============//
 export default LayoutOne
