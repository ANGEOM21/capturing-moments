/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'alex-brush': ['Alex Brush', 'cursive'],
      },
      colors: {
        "dark": "#161C24",
        "light": "#F9FAFB",
        "gray": "#CED3D0",
        "white": "#FFFFFF",
        "primary": "#677B71",
        "secondary": "#ECEDE8",
        "success": "#8FB02B",
        "error": "#EE5252",
        "danger": "#EE5252",
        "warning": "#F5CC3C",
        "info": "#47C5DF",
      },
      backgroundImage: {
        'parallax': "url('/assets/img/banner.jpeg')",
      },
      container: {
        center: true,
        padding: "2rem",
      }
    },
  },
  daisyui:{"themes":["light"]},
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#677B71",
          "secondary": "#ECEDE8",
          "success": "#8FB02B",
          "error": "#EE5252",
          "warning": "#F5CC3C",
          "info": "#47C5DF",
          "accent": "#47dfbc"
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ]
}

