/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
          'primary': '#0fa9e6', // Primary brand color
          'light': '#3fbaeb', // Lighter shade
          'dark': '#0c87b8', // Darker shade
           'white':'#fff',
           'navibar':'#1e90ff',
           'navyblue':'#000080',
           'black':'#000000',
           'red':'#ff0000',

      },
    },
    screens: {
      'sm': '568px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // Custom breakpoint
    },
  },
  plugins: [],
}

