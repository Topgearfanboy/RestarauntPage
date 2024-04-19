import React from "react";
import { useSettings } from "../../hooks/settings-hook";
import { MenuSection } from "./MenuSection";

interface HoursProps {}

export const Menu: React.FC<HoursProps> = () => {
  const settings = useSettings();
  let Sections = settings?.Menu.map((section) => {
    return <MenuSection section={section} />;
  });
  return <div className="flex flex-col py-12">{Sections}</div>;
};
