import React, { useRef } from 'react'
import { todoupdate } from '../stores/action'
import { useDispatch } from 'react-redux/es/exports'
import { useNavigate, useParams } from 'react-router-dom'
export const Edit = () => {
  const {id}=useParams()
    const ref=useRef()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const addNew=()=>{
        let value=ref.current.value
     
        dispatch(todoupdate({
          id:id,
          name:value,
          
        })
        )
     ref.current.value=null
    navigate('/todo')

    }
  return (
    <div>
        <input type="text" ref={ref}/>
        <button onClick={addNew}>Add</button>
    </div>
  )
}
