import { Typography } from "@mui/material";
import React from "react";
import House from "./house.svg";
import { NavBar } from "../navBar";
import { useSettings } from "../../hooks/settings-hook";
import { Footer } from "../Footer";
// import Background from "./background.jpg";

interface InitalState {
  //   report: Report;
  //   setReport: Function;
}

export function MenuPage(props: InitalState): JSX.Element {
  const Settings = useSettings();
  return (
    <div className="flex flex-col">
      <div className=" h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed bg-[url('../components/HomePage/background.jpg')] bg-opacity-25">
        <NavBar />
        <div className=" mt-20 flex justify-center flex-col md:flex-row ">
          <div className=" max-w-min flex flex-row ">
            <div className="flex flex-col mr-10">
              <Typography
                variant="h1"
                sx={{ fontWeight: "medium" }}
                color={Settings?.Theme.Primary as string}
                className="min-w-max"
              >
                {Settings?.General.Name}
              </Typography>

              <Typography
                variant="h5"
                color={Settings?.Theme.Primary as string}
                className="pb-10"
              >
                {Settings?.General.TagLine}
              </Typography>
              <a href="/menu">
                <button
                  type="button"
                  className="text-white bg-Theme hover:bg-ThemeDark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none max-w-max"
                >
                  {Settings?.Words.Menu}
                </button>
              </a>
            </div>
          </div>

          <img src={House} alt="React Logo" className="w-1/4" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
