import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./store";
import _ from "lodash";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
