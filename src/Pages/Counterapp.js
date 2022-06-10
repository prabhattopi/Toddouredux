import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterDec, counterInc, todoAdd } from '../stores/action'
import "./couter.css"
export const Counterapp = () => {

    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return (
      <>
    <div className='count'>Count:{count}</div>
    <div className='but'>
        <button className='got' onClick={()=>dispatch(counterInc())}>+</button>
        <button className='got' onClick={()=>dispatch(counterDec())}>-</button>
    </div>
    </>
  )
}
