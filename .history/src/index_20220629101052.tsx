import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./mock/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App callback={() => console.log("renderered")} />);
