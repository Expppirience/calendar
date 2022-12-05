import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {authSelector} from "../redux/reducers/auth/selectors";

export const Navbar = () => {
   const router = useNavigate()

   const navigateToLoginPage = () => {
      router(RouteNames.LOGIN)
   }
   const logOutUser = () => {
      console.log('logging out')
   }

   const {isAuth} = useTypedSelector(authSelector)
   return (<div>
      <Layout.Header>
         <Row justify={'end'}>
            {isAuth ? <>
               <div style={{color: 'white'}}>Users' login</div>
               <Menu theme={'dark'} selectable={false}>
                  <Menu.Item key={1} onClick={logOutUser}>Log out</Menu.Item>
               </Menu>
            </> : <Menu theme={'dark'} selectable={false}>
               <Menu.Item key={1} onClick={navigateToLoginPage}>Login</Menu.Item>
            </Menu>}

         </Row>
      </Layout.Header>
   </div>);
};

