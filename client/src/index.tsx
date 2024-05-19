import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import React from "react";
import { AppContainer } from "./AppContainer";
import { SettingsContext } from "./context/settings-context";
import { config } from "./config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SettingsContext.Provider value={config}>
      <AppContainer />
    </SettingsContext.Provider>
  </React.StrictMode>
);
