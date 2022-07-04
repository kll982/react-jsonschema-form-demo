import React from "react";
import { BaseForm, ThemeSwitcher } from "./components";
import "./App.less";

class App extends React.Component {
  render() {
    return (
      <div className="formRoot">
        <BaseForm />
        <ThemeSwitcher />
      </div>
    );
  }
}

export default App;
