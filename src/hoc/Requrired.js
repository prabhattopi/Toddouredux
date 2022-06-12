import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import {useLocation} from "react-router-dom"
import {Navigate} from "react-router-dom"
export const Requrired = ({children}) => {
    const {isAuth}=useSelector((state)=>state.auth)
const location=useLocation()
    const from={
        pathname:location.pathname
    }
    if(isAuth) return children
    return <Navigate to={'/login'} state={from} replace />


}
