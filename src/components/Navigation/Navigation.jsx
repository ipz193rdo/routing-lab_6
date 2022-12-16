import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    let activeStyle = {
        color: "Red",
      };
    
  return (
    <>
    
    <NavLink to="/"  style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
    <NavLink to="/products/category" style={({ isActive }) => isActive ? activeStyle : undefined}>Category</NavLink>
    <NavLink to="/products/search" style={({ isActive }) => isActive ? activeStyle : undefined}>Search</NavLink>


    </>
  )
}

export default Navigation