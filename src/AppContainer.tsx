import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { MenuPage } from "./components/MenuPage";
import { Schedule } from "./components/Hours";
import { config } from "./config";
import { Footer } from "./components/Footer";

interface InitalState {}

export function AppContainer(props: InitalState): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}
