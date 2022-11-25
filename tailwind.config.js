/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '350px',
        'largeMobileScreens': '420px',
        'tablet': '730px',
        'laptop': '1200px',
        'monitor': '1600px',
      },
      colors: {
        bgColor: '#FAFAFA',
        linkColor: '#169EF6',
        linkUnActiveColor: '#D1EDFD',
      }
    },
  },
  plugins: [require("daisyui")],
}
