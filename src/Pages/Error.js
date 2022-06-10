import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
    const navigate=useNavigate()
  return (
    <>
    <button onClick={()=>navigate('/todo')}>Go To Todo</button>
    <div style={{textAlign:"center",fontSize:"50px"}}>Error</div>
    </>
  )
}
