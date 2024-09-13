const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors:{
      primary: "#1F1F1F",
      secondary: "#292929",
      third: "#333333",
      accent: "#474747",
      white: "#E0E0E0",
      test: "red",

    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
