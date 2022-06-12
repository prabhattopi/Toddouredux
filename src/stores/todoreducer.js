import axios from "axios";
import { useEffect } from "react";
import { getTodods } from "./action";
import { ADD_TODOS_ERROR, ADD_TODOS_LOADING, ADD_TODOS_SUCCEES, COMPLETE_TODO, DELETE_TODO, GET_TODOS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCEES, UPDATE_TODO } from "./actiontype";



   
    const initialState={
        addTod:{
            loading:false,
        
        },
        getTod:{
            loading:false,
        error:false,
       
        },
        data:[]
       
    }
export const todoReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_TODOS_SUCCEES:{
            return{
                ...state,
            getTod:{
              
                loading:false,
         
                
            },
            data:payload
        }
        }
        case GET_TODOS_LOADING:{
            return{
                ...state,
            getTod:{
               
                loading:true,
              
                
            }
        }
        }
        case GET_TODOS_ERROR:{
            return{
                ...state,
            getTod:{
              
                loading:false,
               
            }
        }
        }
        
        case ADD_TODOS_SUCCEES:{
            return{
                ...state,
                getTod:{
                    loading:false
                },
          
            addTod:{
              
                loading:false,
               
            },
            data:[...state.data,payload]
        }
        }
        case ADD_TODOS_LOADING:{
            return{
                ...state,
            addTod:{
             
                loading:true,
              
                
            }
        }
        }
        case ADD_TODOS_ERROR:{
            return{
                ...state,
            addTod:{
              
                loading:false,
               
                
            }
        }
        }
        
       
        case DELETE_TODO:{

            return{...state,
                
                data:state.data.filter((e)=>(e.id!=payload.id))
            
            
            }

        }
        
        case UPDATE_TODO:{

            return{...state,
            data:state.data.map(e=>(e.id==payload.id?{...e,name:payload.name}:e))
            
            }

        }
        case COMPLETE_TODO:{

            return{...state,
              data:state.data.map((e,i)=>(e.id===payload.id?{...e,iscomplete:!payload.iscomplete}:e))
            }

        }
        default:{
            return state
        }
    }
}

