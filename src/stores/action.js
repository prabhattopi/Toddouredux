import axios from "axios";
import { ADD_TODO, ADD_TODOS_ERROR, ADD_TODOS_LOADING, ADD_TODOS_SUCCEES, COMPLETE_TODO, COUNTER_DECREMENT, COUNTER_INCREMENT, DELETE_TODO, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCEES, UPDATE_TODO,LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCES, LOGOUT  } from "./actiontype";


export const counterInc=()=>({type:COUNTER_INCREMENT})
export const counterDec=()=>({type:COUNTER_DECREMENT})






export const getTodods=() => (dispatch)=>{
      //this time is waiting
      dispatch({type:GET_TODOS_LOADING})
    return axios.get("http://localhost:8080/Products").then((r)=>{
        //loading ends
        //succerss
        dispatch({type:GET_TODOS_SUCCEES,payload:r.data})
      }).catch(()=>{
          //loading
          //error
          dispatch({type:GET_TODOS_ERROR})

      })
}
export const addTodo=(payload)=>(dispatch)=>{
    dispatch({type:ADD_TODOS_LOADING})
    axios.post("http://localhost:8080/Products",payload).then((r)=>{
   dispatch({type:ADD_TODOS_SUCCEES,payload:r.data})
    }).catch(()=>{
        dispatch({type:ADD_TODOS_ERROR})
    })
}
export const todoRemove=(id)=>(dispatch)=>{
    axios.delete(`http://localhost:8080/Products/${id}`).then((r)=>{
        dispatch({type:DELETE_TODO,payload:id})
        
    })
}

export const todoupdate=({id,name})=>(dispatch)=>{
    axios.patch(`http://localhost:8080/Products/${id}`,{name}).then(r=>{
        dispatch({type:UPDATE_TODO,
            payload:r.data})
    })
     
        
    }
    
    export const todoComplete=(paylaod)=>(dispatch)=>(
    
        dispatch({type:COMPLETE_TODO,
            payload:paylaod})
    
    )
     




export const login=(data)=>(dispatch)=>{
    setTimeout(() => {
        dispatch({type:LOGIN_LOADING})
    }, 3000);

    axios.post("https://reqres.in/api/login",{
        "email": data.email,
        "password": data.password
    }).then((r)=>{
        dispatch({type:LOGIN_SUCCES,payload:r.data})
    }).catch(()=>{
        dispatch({type:LOGIN_ERROR})
    })
  
   
}
export const logout=()=>({type:LOGOUT})
   


    

    


   
