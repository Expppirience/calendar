import React, {FC} from 'react';
import {AppRouter} from "./components/AppRouter";
import {Navbar} from "./components/Navbar";
import {Layout} from "antd";

const App: FC = () => {
   return (<div>
      <Layout>
         <Navbar/>
         <Layout.Content>
            <AppRouter/>
         </Layout.Content>
      </Layout>
   </div>);
};

export default App;
