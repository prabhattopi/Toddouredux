import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css/Navbar.css"
export const Navbar = () => {
  return (
    <div className='Nav'>
     <NavLink className="nav" to="/">Home</NavLink>
      <div className='todo'>
       <NavLink className="nav" to="/todo">TodoAPP</NavLink>
       <NavLink className="nav" to="/counter">Counter</NavLink>
       </div>
       <div>
        <button className='butt'>Login</button>
       </div>
    </div>
  )
}
