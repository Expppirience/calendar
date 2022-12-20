import { applyMiddleware, combineReducers, createStore } from "redux";

import { AuthAC } from "./reducers/auth/actionCreators";
import { EventAC } from "./reducers/event/actionCreators";
import { reducers } from "./reducers";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const AllAC = {
  ...AuthAC,
  ...EventAC,
};
