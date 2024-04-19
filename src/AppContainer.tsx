import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { MenuPage } from "./components/MenuPage";
import { useSettings } from "./hooks/settings-hook";
import { Menu } from "./components/Menu";

interface InitalState {}

export function AppContainer(props: InitalState): JSX.Element {
  let settings = useSettings();
  React.useEffect(() => {
    document.title = settings?.General.Name ?? "";
  }, [settings?.General.Name]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/footer" element={<Menu />} />
      </Routes>
    </Router>
  );
}
