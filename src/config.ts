import { Settings } from "./types";

export const config = {
  Theme: { Primary: "#22aeff", Secondary: "#FFFFFF" },
  General: {
    Name: "Moe's Chicken",
    Address: "123 Main St New York New York",
    PhoneNumber: "",
    TagLine: "Good Eats!",
  },
  Links: { Instagram: "insta", X: "X", Facebook: "Facebook", Takeout: "Test" },
  Words: {
    Menu: "Menu",
    Reservations: "Reservations",
    Takeout: "Takeout",
    Hours: "Hours",
    Address: "Address",
    SocialMedia: "Social Media",
    Instagram: "Instagram",
    X: "X",
    Facebook: "Facebook",
  },
  Menu: [
    {
      Name: "Starters",
      Dishes: [
        {
          Price: 5,
          Name: "WORLD-FAMOUS BUTTERMILK BISCUITS",
          Description: "served with honey butter",
        },
        {
          Price: 8,
          Name: "TEXAS NACHOS",
          Description:
            "house made salt and pepper potatoes, covered in cheese, chili & choice of pulled chicken, pulled pork or +2 chopped beef",
        },
        {
          Price: 12,
          Name: "SCQ SMOKED WINGS",
          Description: "tossed in gold sauce, chipotle buffalo or dry rubbed",
        },
        { Price: 9, Name: "SALT AND PEPPER POTATOES" },
        { Price: 9, Name: "BUTTERMILK FRIED OKRA" },
        { Price: 8, Name: "PIMENTO CHEESE, SLEEVE O’ RITZ" },
      ],
    },
    {
      Name: "Entres",
      Dishes: [
        { Price: 12, Name: "SCQ CHEDDAR JALAPEÑO" },
        { Price: 8, Name: "STUFFED HOT LINKS" },
        { Price: 8, Name: "SCQ TEXAS STYLE HOT LINKS" },
        {
          Price: 8,
          Name: "ALL-NATURAL PULLED CHICKEN",
          Description:
            "all natural chicken, smoked low & slow over oak wood & hand picked",
        },
        {
          Price: 8,
          Name: "HERITAGE BREED PULLED PORK",
          Description: "all natural pork, SCQ spice rub,14 hour smoke",
        },
        {
          Price: 8,
          Name: "SMOKED PORK BELLY",
          Description: "all natural pork belly, cured, brined, smoked & sliced",
        },
        {
          Price: 8,
          Name: "HALF SLAB ST. LOUIS PORK RIBS",
          Description: "½ slab [5-7] of dry rubbed St. Louis pork ribs",
        },
        {
          Price: 8,
          Name: "BBQ CHOPPED PRIME BRISKET",
          Description:
            "end pieces of prime beef brisket chopped with house barbeque sauce",
        },
        {
          Price: 8,
          Name: "SLICED PRIME BRISKET",
          Description:
            "all natural USDA prime beef brisket, slow smoked for 14 hour with just salt & pepper. hand sliced to order",
        },
        {
          Price: 8,
          Name: "HALF SMOKED LITTLE CHICKEN",
          Description:
            "all natural delaware chicken, brined & slow-smoked for three hours",
        },
      ],
    },
    {
      Name: "Deserts",
      Dishes: [
        { Price: 4, Name: "Ice Cream" },
        { Price: 6, Name: "Sundae" },
      ],
    },
  ],
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
