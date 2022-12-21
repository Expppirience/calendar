import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from "./types";

import { AppDispatch } from "../../index";
import { IUser } from "../../../models/IUser";
import { UserService } from "./../../../api/UserService";

export const AuthAC = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (loading: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: loading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  login: (username: string, password: string) => {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthAC.setIsLoading(true));
        const response = await UserService.getUsers();
        const user = response.data.find(
          (u) => u.username === username && u.password === password
        );
        if (!user) {
          dispatch(AuthAC.setError("Incorrect username or password"));
          return;
        }
        localStorage.setItem("auth", "true");
        localStorage.setItem("username", username);
        dispatch(AuthAC.setUser(user));
        dispatch(AuthAC.setIsAuth(true));
        dispatch(AuthAC.setIsLoading(false));
      } catch (e) {
        dispatch(AuthAC.setError("Error due to logging in"));
      }
    };
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(AuthAC.setUser({} as IUser));
    dispatch(AuthAC.setIsAuth(false));
  },
};
