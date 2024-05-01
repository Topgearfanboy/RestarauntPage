import React from "react";
import { useSettings } from "../../hooks/settings-hook";
import { MenuSection } from "./MenuSection";

interface HoursProps {}

export const Menu: React.FC<HoursProps> = () => {
  const settings = useSettings();
  let Sections = settings?.Menu.map((section) => {
    return <MenuSection section={section} key={section.Name} />;
  });
  // const darkerTheme = stringToHex(settings?.Theme.Primary)>>1;
  return (
    <div className="flex flex-col py-12 border border-Black mx-auto my-12 rounded-xl bg-white">
      {Sections}
    </div>
  );
};
