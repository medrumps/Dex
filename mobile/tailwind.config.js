/** @type {import('tailwindcss').Config} */
module.exports = {
  // Required for NativeWind on web: manual scheme updates conflict with default `media`
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};
