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
          10: "#a89ec3", 
          20: "#9e93bb",
          30: "#9589b3",
          40: "#8b7dab",
          50: "#8173a2",
        },
        background: {
          base: "#f2e9e0",
          10: "#e5dcd3",
          20: "#c5bcb3",
          30: "#a59c93",
          40: "#877e77",
          50: "#69625a",
        },
      }
    },
  },
  plugins: [],
};
