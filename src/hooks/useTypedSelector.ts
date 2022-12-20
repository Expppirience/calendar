import { TypedUseSelectorHook, useSelector } from "react-redux";

import { AppStateType } from "../redux";

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;
