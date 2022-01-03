import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RootNavigator } from "./navigation";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./styles/normalize.css";
import "./styles/fonts.css";
import "animate.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <RootNavigator />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
