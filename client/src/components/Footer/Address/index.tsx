import React from "react";
import { useSettings } from "../../../hooks/settings-hook";
import { formatLink } from "./helpers";

export const Address: React.FC = () => {
  const settings = useSettings();
  const formattedAddress = formatLink(settings?.General.Address ?? "");
  return (
    <div className="flex flex-col">
      <p className="text-xl pb-4">{settings?.Words.Address}</p>
      <a href={formattedAddress}>
        <address>{settings?.General.Address}</address>
      </a>
    </div>
  );
};
