/** @type {import('tailwindcss').Config} */
import { config } from "./src/config";

module.exports = {
  theme: {
    extend: {
      colors: {
      'Theme': config.Theme.Primary,
      'ThemeDark': '#0053B5',
      'ThemeLight':'#EEFBFF',
      'ThemeMedium': '#6C94BC',
      'ThemeOff':'#E6F4F1',
      },
      spacing: {
        'builder': '30rem',
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
