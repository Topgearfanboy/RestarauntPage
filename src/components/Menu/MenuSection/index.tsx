import React from "react";
import { Section } from "../../../types";
import { Typography } from "@mui/material";

interface MenuSectionProps {
  section: Section;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  let Dishes = section.Dishes.map((Dish) => {
    return (
      <div className="flex flex-col justify-start px-32 pb-4">
        <div className="flex flex-row justify-between">
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {Dish.Name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: "oblique" }}>
            {`$${Dish.Price}`}
          </Typography>
        </div>
        <Typography variant="body1" sx={{ fontStyle: "oblique" }}>
          {Dish.Description}
        </Typography>
      </div>
    );
  });
  return (
    <div className="w-1/2 m-auto">
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
