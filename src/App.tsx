import React from "react";
import "./App.less";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import RouteTable from "./route";

import "./mock/mock";
class App extends React.Component {
  render() {
    return (
      <div className="formRoot">
        <HashRouter>
          <RouteTable />
        </HashRouter>
      </div>
    );
  }
}

const container = document.getElementById("app") as HTMLElement;
createRoot(container).render(<App />);
