import React from "react";
import { useSettings } from "../../hooks/settings-hook";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as X } from "./x.svg";

export const SocialMedia: React.FC = () => {
  const settings = useSettings();
  return (
    <div className="flex flex-col w-1/3">
      <p className="text-xl pb-4">{settings?.Words.SocialMedia}</p>
      <div className="flex flex-row justify-between">
        {settings?.General.SocialMedia?.Instagram && (
          <a href={settings?.General.SocialMedia?.Instagram}>
            <Instagram fill={settings.Theme.Primary} height={60} />
          </a>
        )}
        {settings?.General.SocialMedia?.X && (
          <a href={settings?.General.SocialMedia?.X}>
            <X fill={settings.Theme.Primary} height={60} />
          </a>
        )}
        {settings?.General.SocialMedia?.Facebook && (
          <a href={settings?.General.SocialMedia?.Facebook}>
            <Facebook fill={settings.Theme.Primary} height={60} />
          </a>
        )}
      </div>
    </div>
  );
};
