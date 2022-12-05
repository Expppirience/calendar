import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {reducers} from "./reducers";

const rootReducer = combineReducers(reducers)


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch