import {AuthActionsEnum, AuthActionsType, AuthState} from "./types";

const initialState: AuthState = {
   isAuth: false
}

export const authReducer = (state: AuthState = initialState, action: AuthActionsType): AuthState => {
   switch (action.type) {
      case AuthActionsEnum.SET_AUTH:
         return {...state, isAuth: action.payload}
      default:
         return state
   }
}