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
      <div className="flex flex-row justify-between px-12">
        {settings?.General.SocialMedia?.Instagram && (
          <a href={settings?.General.SocialMedia?.Instagram}>
            <Instagram fill={settings.Theme.Secondary} height={60} />
          </a>
        )}
        {settings?.General.SocialMedia?.X && (
          <a href={settings?.General.SocialMedia?.X}>
            <X fill={settings.Theme.Secondary} height={60} />
          </a>
        )}
        {settings?.General.SocialMedia?.Facebook && (
          <a href={settings?.General.SocialMedia?.Facebook}>
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
