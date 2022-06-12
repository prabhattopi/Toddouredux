import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css/Navbar.css"
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { logout } from '../stores/action'
export const Navbar = () => {
 const navigate=useNavigate()
  const {isAuth}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const hadlelou=()=>{
   dispatch(logout())
  }
  return (
    <div className='Nav'>
     <NavLink className="nav" to="/">Home</NavLink>
      <div className='todo'>
       <NavLink className="nav" to="/todo">TodoAPP</NavLink>
       <NavLink className="nav" to="/counter">Counter</NavLink>
       </div>
       <div>
        <button className='butt' onClick={hadlelou}>{isAuth?"Logout":"Login"}</button>
       </div>
    </div>
  )
}
