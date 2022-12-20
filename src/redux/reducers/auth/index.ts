import { AuthActionsEnum, AuthActionsType, AuthState } from "./types";

import { IUser } from "../../../models/IUser";

const initialState: AuthState = {
  isAuth: false,
  error: "",
  isLoading: false,
  user: {} as IUser,
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActionsType
): AuthState => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionsEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case AuthActionsEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
