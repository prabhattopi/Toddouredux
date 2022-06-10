import { GET_TODOS } from "./action";
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./actiontype";


export const reducer=(state={count:0},action)=>{
    switch(action.type){
       
        case COUNTER_INCREMENT:{state.count++;
        return{...state}}
        case COUNTER_DECREMENT:{state.count--;
        return{...state}}

        default:{
            return state
        }
    }

}