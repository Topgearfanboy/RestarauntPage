import { Settings } from "./types";

export const config = {
  Theme: { Primary: "#22aeff" },
  General: {
    Name: "Moe's Chicken",
    Address: "123 Main St New York New York",
    PhoneNumber: "",
    TagLine: "Good Eats!",
  },
  Words: {
    Menu: "Menu",
    Address: "Address",
    SocialMedia: "Social Media",
    Instagram: "Social Media",
    X: "X",
    Facebook: "Facebook",
  },
  Dishes: [],
  Hours: [
    {
      Day: "Sunday",
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    {
      Day: "Monday",
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    {
      Day: "Tuesday",
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    {
      Day: "Wednesday",
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    {
      Day: "Thursday",
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    {
      Day: "Friday",
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    {
      Day: "Saturday",
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
  ],
} as Settings;
