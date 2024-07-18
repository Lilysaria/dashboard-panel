import "vite/modulepreload-polyfill";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'semantic-ui-css/semantic.min.css'
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

if (import.meta.env.DEV) {
  import('http://localhost:5173/@react-refresh').then((RefreshRuntime) => {
    RefreshRuntime.injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => {};
    window.$RefreshSig$ = () => (type) => type;
    window.__vite_plugin_react_preamble_installed__ = true;
  });

  import('http://localhost:5173/@vite/client');
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
