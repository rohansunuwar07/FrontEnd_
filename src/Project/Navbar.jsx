import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav> <NavLink to={'/product'} style={{margin:'10px'}} >Products</NavLink>
      <NavLink to={'/product/create'} >Create Product</NavLink>
      </nav>
  )
}

export default Navbar