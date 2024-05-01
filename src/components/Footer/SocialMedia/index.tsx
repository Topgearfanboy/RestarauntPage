import React from "react";
import { useSettings } from "../../../hooks/settings-hook";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as X } from "./x.svg";
import { Facebook } from "./facebook";

export const SocialMedia: React.FC = () => {
  const settings = useSettings();
  return (
    <div className="flex flex-col w-1/3">
      <p className="text-xl pb-4">{settings?.Words.SocialMedia}</p>
      <div className="flex flex-row justify-between">
        {settings?.Links?.Instagram && (
          <a href={settings?.Links?.Instagram} className="px-4">
            <Instagram fill={settings.Theme.Secondary} height={60} />
          </a>
        )}
        {settings?.Links?.X && (
          <a href={settings?.Links?.X} className="px-4">
            <X fill={settings.Theme.Secondary} height={60} />
          </a>
        )}
        {settings?.Links?.Facebook && (
          <a href={settings?.Links?.Facebook} className="px-4">
            <Facebook
              inside={settings.Theme.Primary}
              outside={settings.Theme.Secondary}
              height={60}
            />
          </a>
        )}
      </div>
    </div>
  );
};
