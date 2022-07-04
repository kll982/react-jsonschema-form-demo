import React from "react";
// import ReactDOM from "react-dom";

import { createRoot } from "react-dom/client";

import App from "./App.js";
import "./mock/mock";

const container = document.getElementById("app") as HTMLElement;
createRoot(container).render(<App />);
