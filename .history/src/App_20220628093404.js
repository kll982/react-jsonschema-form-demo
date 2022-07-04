import React from "react";
import { BaseForm, Themes } from "./components";
import "./App.less";
import { Button } from "antd";

const { ThemeSwitcher } = Themes;

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>123</Button>
        <BaseForm />
        <ThemeSwitcher />
      </div>
    );
  }
}

export default App;
