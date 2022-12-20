import { AuthAC } from "../redux/reducers/auth/actionCreators";
import { Event } from "../pages/Event";
import { Login } from "../pages/Login";

export interface IRoute {
  path: string;
  component: React.FC;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];
export const privateRoutes = [
  { path: RouteNames.EVENT, exact: true, component: Event },
];

export const AllAC = {
  ...AuthAC,
};
