import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";

import { authSelector } from "./../redux/reducers/auth/selectors";
import { rules } from "../utils/rules";
import { useActions } from "./../hooks/useActions";
import { useTypedSelector } from "./../hooks/useTypedSelector";

export const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector(authSelector);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();

  const submitLogin = () => {
    login(username, password);
  };

  return (
    <div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form onFinish={submitLogin}>
        <Form.Item
          label="Username"
          name="username"
          rules={[rules.required("Please input your username!")]}
        >
          <Input
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[rules.required("Please input your password!")]}
        >
          <Input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            type={password}
          />
        </Form.Item>
        <Form.Item>
          <Button loading={isLoading} type={"primary"} htmlType={"submit"}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
