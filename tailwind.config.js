const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        paper: "0px 5px 15px rgba(84, 84, 84, 0.1)",
      },
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
