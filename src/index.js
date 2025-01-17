import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import reducer, { initialState } from "./Reducer.js";
import { StateProvider } from "./StateProvider.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
