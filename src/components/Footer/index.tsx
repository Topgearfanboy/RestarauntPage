import React from "react";
import { Schedule } from "./Hours";
import { Address } from "./Address";
import { SocialMedia } from "./SocialMedia";

interface HoursProps {}

export const Footer: React.FC<HoursProps> = () => {
  return (
    <div className="flex flex-row justify-between px-48 py-12 bg-Theme text-Secondary">
      <Address />
      <Schedule />
      <SocialMedia />
    </div>
  );
};
