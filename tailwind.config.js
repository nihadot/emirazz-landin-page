/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-red': '0px 0px 62.4px 1px rgba(255, 0, 0, 0.41)',
      },

      fontFamily: {
      
        sfbold:["Sf-Pro-Bold","sans-serif"],
        sfregular:["Sf-Pro-Regular","sans-serif"],
        sfmedium:["Sf-Pro-Medium","sans-serif"],
        poppins: ["Poppins", "serif"],
        Komorebi:['Komorebi', 'sans-serif']
      },
      screens:{
        'xs-md': '812px',
        'xs-xs': '644px'
      },
      
    },
  },
  plugins: [],
}

