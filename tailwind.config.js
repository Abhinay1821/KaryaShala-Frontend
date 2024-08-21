/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            
  "primary": "#a400ff",
            
  "secondary": "#3e28ff",
            
  "accent": "#00afff",
            
  "neutral": "#081306",
            
  "base-100": "#332634",
            
  "info": "#07acff",
            
  "success": "#2ec400",
            
  "warning": "#db8000",
            
  "error": "#ff4762",
            },
          },
        ],
      },
    plugins: [
          require('daisyui'),

    ],
  }