import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {authSelector} from "../redux/reducers/auth/selectors";

export const AppRouter = () => {
   const {isAuth} = useTypedSelector(authSelector)
   const auth = true
   return (<div>
      {auth ? <Routes>
         {privateRoutes.map((route) => {
            return (<Route key={route.path} path={route.path} element={<route.component/>}/>)
         })}
         <Route path={'/*'} element={<Navigate to={RouteNames.EVENT}/>}/>
      </Routes> : <Routes>
         {publicRoutes.map((route) => {
            return (<Route key={route.path} path={route.path} element={<route.component/>}/>)
         })}
         <Route path={'/*'} element={<Navigate to={RouteNames.LOGIN}/>}/>
      </Routes>

      }
   </div>);
};

