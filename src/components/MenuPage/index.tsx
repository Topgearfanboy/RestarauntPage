import { Typography } from "@mui/material";
import React from "react";
import House from "./house.svg";
import { NavBar } from "../navBar";
import { useSettings } from "../../hooks/settings-hook";
import { Footer } from "../Footer";
import { Menu } from "../Menu";
// import Background from "./background.jpg";

interface InitalState {
  //   report: Report;
  //   setReport: Function;
}

export function MenuPage(props: InitalState): JSX.Element {
  const Settings = useSettings();
  return (
    <div className="flex flex-col">
      <NavBar />
      <Menu />
      <Footer />
    </div>
  );
}
