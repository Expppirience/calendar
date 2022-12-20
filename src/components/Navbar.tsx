import { Layout, Menu, Row } from "antd";

import React from "react";
import { RouteNames } from "../routes";
import { authSelector } from "../redux/reducers/auth/selectors";
import { useActions } from "./../hooks/useActions";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Navbar = () => {
  const router = useNavigate();
  const { logout } = useActions();

  const navigateToLoginPage = () => {
    router(RouteNames.LOGIN);
  };
  const logOutUser = () => {
    logout();
  };

  const { isAuth } = useTypedSelector(authSelector);
  return (
    <div>
      <Layout.Header>
        <Row justify={"end"}>
          {isAuth ? (
            <>
              <div style={{ color: "white" }}>Users' login</div>
              <Menu theme={"dark"} selectable={false}>
                <Menu.Item key={1} onClick={logOutUser}>
                  Log out
                </Menu.Item>
              </Menu>
            </>
          ) : (
            <Menu theme={"dark"} selectable={false}>
              <Menu.Item key={1} onClick={navigateToLoginPage}>
                Login
              </Menu.Item>
            </Menu>
          )}
        </Row>
      </Layout.Header>
    </div>
  );
};
