import {legacy_createStore,combineReducers} from "redux"
import { reducer } from "./counterreducer"
import { todoReducer } from "./todoreducer"

import thunk from "redux-thunk"

import { applyMiddleware, compose } from "redux";
import { authreducer } from "./auth.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const rootreducer=combineReducers({
    counter:reducer,
    auth:authreducer,
    todoApp:todoReducer
})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)));