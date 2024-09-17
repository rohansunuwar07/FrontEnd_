import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './Project/Navbar'
import Footer from './Project/Footer'
import CreateProduct from './Project/CreateProduct'


const Project = () => {

  return (
    <div>
     
      <Routes>

        <Route path='/' element={<><Navbar /> <Outlet /> <Footer />  </>}>
        <Route path='product' element={<Outlet />}>
        <Route index element={<div>Product page</div>} ></Route>
        <Route path='create' element={<CreateProduct />}></Route>
        
        </Route>
        
        </Route>

      </Routes>
    </div>
  )
}

export default Project