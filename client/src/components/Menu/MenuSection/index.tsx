import React from "react";
import { Section } from "../../../types";
import { Typography } from "@mui/material";

interface MenuSectionProps {
  section: Section;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  let Dishes = section.Dishes.map((Dish) => {
    return (
      <div className="flex flex-row justify-between px-32 pb-4" key={Dish.Name}>
        <div className="flex flex-col justify-start">
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {Dish.Name}
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: "oblique" }}>
            {Dish.Description}
          </Typography>
        </div>
        <Typography
          variant="subtitle1"
          sx={{ fontStyle: "oblique" }}
          className="my-auto"
        >
          {`$${Dish.Price}`}
        </Typography>
      </div>
    );
  });
  return (
    <div className="w-4/5 m-auto">
      <Typography
        variant="h3"
        className="pb-4 text-center pb-8"
        sx={{ fontStyle: "oblique" }}
      >
        {section.Name}
      </Typography>

      <div className="flex flex-col">{Dishes}</div>
    </div>
  );
};
