import React from "react";
import { useSettings } from "../../hooks/settings-hook";

export const Address: React.FC = () => {
  const settings = useSettings();

  return (
    <div className="flex flex-col">
      <p className="text-xl pb-4">{settings?.Words.Address}</p>
      <address>{settings?.General.Address}</address>
    </div>
  );
};
