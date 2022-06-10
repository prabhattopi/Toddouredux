import axios from 'axios'
import React,{useRef, useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getTodods, todoAdd, todoComplete, todoRemove, todoupdate } from '../stores/action'
import {useNavigate, useParams,Link} from "react-router-dom"

import "./Todo.css"
export const TodoApp = () => {
    const dispatch=useDispatch()
    const ref=useRef()
    
     const navigate=useNavigate()
 


    const {getTod:gTodo,addTod:aTodo,data:todos}=useSelector((state)=>state.todoApp)


    
  
    
   
    const addNew=()=>{
        let value=ref.current.value
     
        dispatch(addTodo({
          name:value,
          iscomplete:false
        })
        )
     ref.current.value=null

    }
    useEffect(() => {
     if(todos.length==0)
     dispatch(getTodods())
    
    
    
    }, [])

    const Eddle=(done,id)=>{
      if(done){
        navigate("/error")
      }
      else{
        navigate(`/todo/${id}/edit`)
      }

    }
    const deleteR=(id)=>{
      dispatch(todoRemove(id))
      dispatch(getTodods())
    }
    const dels=(id,done)=>{
      dispatch(todoComplete({
        id:id,
        iscomplete:done
      }))
      
    }
   if(gTodo.loading){
     return(
       <div>Loading....</div>
     )
   }
   else if(gTodo.error){
     return (
       <div>Something.....</div>
     )
   }
   else{

 
  return (
  
    <div className='Todo'>
      <h1>TODO APP</h1>
     <div>
     <input type="text" ref={ref} />

     <button onClick={addNew} disabled={aTodo.loading}>ADD</button>
     </div>
     
     <br />
     
     {todos.map((todo,i)=>(<div><div style={{marginTop:"10px"}} key={i}>{todo.name}</div>
     
       <button onClick={()=>Eddle(todo.iscomplete,todo.id)}>Edit</button>
       <button onClick={()=>dels(todo.id,todo.iscomplete)}>{todo.iscomplete?"Done":"NotDone"}</button>
       <button onClick={()=>deleteR(todo.id)}>del</button>
     
     
     
     </div>))}
     

  </div>
  )
   }
}
