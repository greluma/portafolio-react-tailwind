// cspell:ignore tailwindcss
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-dark":
          "0 8px 10px -2px rgba(0, 0, 0, 0.3), 0 3px 5px -1px rgba(0, 0, 0, 0.01)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
