import React from "react";
import { formatTime } from "./helpers";
import { useSettings } from "../../hooks/settings-hook";

export const Schedule: React.FC = () => {
  const settings = useSettings();
  let days = settings?.Hours?.map((day) => {
    return (
      <>
        <p className="text-center">{`${day.Day}`}</p>
        <p>
          {`${formatTime(day.Opening.Hour, day.Opening.minutes)} - ${formatTime(
            day.Closing.Hour,
            day.Closing.minutes
          )}`}
        </p>
      </>
    );
  });
  return (
    <div className="flex flex-col">
      <p className="text-xl pb-4">{settings?.Words.Hours}</p>
      <div className="grid grid-cols-2 max-w-fit">{days}</div>
    </div>
  );
};
