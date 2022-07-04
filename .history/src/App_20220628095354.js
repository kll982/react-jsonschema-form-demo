import React from "react";
import { BaseForm, Themes } from "./components";
import "./App.less";
import { Button } from "antd";

const { ThemeSwitcher } = Themes;

class App extends React.Component {
  render() {
    return (
      <div className="formRoot">
        <Button>123 test</Button>
        <BaseForm />
        <ThemeSwitcher />
      </div>
    );
  }
}

export default App;
