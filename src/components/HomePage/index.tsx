import { Typography } from "@mui/material";
import React from "react";
import House from "./house.svg";
import { NavBar } from "../navBar";
import { useSettings } from "../../hooks/settings-hook";
import { Footer } from "../Footer";

export const HomePage: React.FC = () => {
  const Settings = useSettings();
  return (
    <>
      <div
        className={`h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed bg-opacity-25`}
        style={{
          backgroundImage: `url('/images/${Settings?.Images.MainPage}')`,
        }}
      >
        <NavBar />
        <div className=" mt-20 flex justify-start flex-col md:flex-row ml-64 max-w-fit p-12">
          <div className=" max-w-min flex flex-row ">
            <div className="flex flex-col">
              <Typography
                variant="h1"
                sx={{ fontWeight: "bold" }}
                color={Settings?.Theme.Primary}
                className="min-w-max"
              >
                {Settings?.General.Name}
              </Typography>

              <Typography
                variant="h5"
                color={Settings?.Theme.Primary}
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
        </div>
      </div>
      <Footer />
    </>
  );
};
