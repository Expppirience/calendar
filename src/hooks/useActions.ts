import { AllAC } from "../redux";
import { bindActionCreators } from "redux";
import { useThunkDispatch } from "./useThunkDispatch";

export const useActions = () => {
  const dispatch = useThunkDispatch();
  return bindActionCreators(AllAC, dispatch);
};
