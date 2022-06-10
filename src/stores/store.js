import {legacy_createStore,combineReducers} from "redux"
import { reducer } from "./counterreducer"
import { todoReducer } from "./todoreducer"

import thunk from "redux-thunk"

import { applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const rootreducer=combineReducers({
    counter:reducer,
    todoApp:todoReducer
})

export const store = legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)));