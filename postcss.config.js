const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
      [
        tailwindcss,
        autoprefixer,
        "postcss-preset-env",
        {
          // Options
        },
      ],
    ],
    // plugins: {
    //     tailwindcss: {},
    //     autoprefixer: {},
    //     "postcss-preset-env":{}
    //   }
    
  };