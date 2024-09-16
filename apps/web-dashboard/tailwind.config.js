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
    extend: {
      colors: {
        primary: '#1F1F1F',
        secondary: '#292929',
        third: '#333333',
        forth: '#3D3D3D',
        fifth: '#474747',
        accent: '#474747',
        white: '#E0E0E0',
        error: '#FF0800',
        warning: '#FFA500',
        success: '#00FF00',
        info: '#00BFFF',
        test: 'purple',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
