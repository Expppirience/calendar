import { authReducer } from "./auth";
import { eventReducer } from "./event/index";

export const reducers = {
  auth: authReducer,
  events: eventReducer,
};
