import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../routes";

import React from "react";
import { authSelector } from "../redux/reducers/auth/selectors";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const AppRouter = () => {
  const { isAuth } = useTypedSelector(authSelector);
  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
          <Route path={"/*"} element={<Navigate to={RouteNames.EVENT} />} />
        </>
      ) : (
        <>
          {publicRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
          <Route path={"/*"} element={<Navigate to={RouteNames.LOGIN} />} />
        </>
      )}
    </Routes>
  );
};
