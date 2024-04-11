import { Settings } from "./types";

export const config = {
  General: {
    Name: "Moes Chicken",
    Address: "",
    PhoneNumber: "",
    TagLine: "Good Eats!",
  },
  Dishes: [],
  Hours: {
    Sunday: {
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    Monday: {
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    Tuesday: {
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    Wednesday: {
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    Thursday: {
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    Friday: {
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
    Saturday: {
      Opening: { Hour: 9, minutes: 0 },
      Closing: { Hour: 17, minutes: 0 },
    },
  },
} as Settings;
