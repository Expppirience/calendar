import { AnyAction } from "redux";
import { AppStateType } from "../redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";

type ThunkDispatchType = ThunkDispatch<AppStateType, any, AnyAction>;
export const useThunkDispatch = useDispatch<ThunkDispatchType>;
