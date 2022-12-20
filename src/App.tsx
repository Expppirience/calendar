import "./App.css";

import React, { FC, useEffect } from "react";

import { AppRouter } from "./components/AppRouter";
import { IUser } from "./models/IUser";
import { Layout } from "antd";
import { Navbar } from "./components/Navbar";
import { useActions } from "./hooks/useActions";

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      setUser({ username: localStorage.getItem("username") } as IUser);
    }
  }, []);

  return (
    <div>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default App;
