/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
       colors: {
        foreground: {
          base: "#8b7db1",
          10: "#e2d4ff", 
          20: "#c2b3ea",
          30: "#a395c9",
          40: "#8476aa",
          50: "#67598a",
        },
        background: {
          base: "#fdfdfc",
          10: "#dededc",
          20: "#80807e",
          30: "#80807e",
          40: "#80807e",
          50: "#636361",
        },
      }
    },
  },
  plugins: [],
};
