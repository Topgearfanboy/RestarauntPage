import React from "react";
import { useSettings } from "../../hooks/settings-hook";

export const SocialMedia: React.FC = () => {
  const settings = useSettings();

  return (
    <div className="flex flex-col">
      <p>{settings?.Words.SocialMedia}</p>
      <div className="flex flex-row">
        {settings?.General.SocialMedia?.Instagram && (
          <a href="/menu">
            <button
              type="button"
              className="ml-36 text-white bg-Theme hover:bg-ThemeDark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none max-w-max"
            >
              {settings?.Words.Instagram}
            </button>
          </a>
        )}
        {settings?.General.SocialMedia?.X && (
          <a href="/menu">
            <button
              type="button"
              className="ml-36 text-white bg-Theme hover:bg-ThemeDark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none max-w-max"
            >
              {settings?.Words.X}
            </button>
          </a>
        )}
        {settings?.General.SocialMedia?.Facebook && (
          <a href="/menu">
            <button
              type="button"
              className="ml-36 text-white bg-Theme hover:bg-ThemeDark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none max-w-max"
            >
              {settings?.Words.Facebook}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
