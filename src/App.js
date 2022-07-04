import React from "react";
import { BaseForm, Themes } from "./components";
import "./App.less";

const { ThemeSwitcher } = Themes;

class App extends React.Component {
  render() {
    return (
      <div className="formRoot">
        <BaseForm />
        {/* <ThemeSwitcher /> */}
      </div>
    );
  }
}

export default App;
