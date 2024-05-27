/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ptsansBold:["PTS", "sans-serif"], 
        ptsansRegular:["pts","sans-serif"],
      },
      colors: {
        primary: '#23b21f',
        secondary: '#fff9f0',
        fontColor:'#362e29',
        fontColorSecondary:'#b08f6d',
        smallFont:'#333333',
        customBrown:'#B08F6D',
      },
      screens: {
        'custom-break': {'max': '260px'},
        'watch-break': '300px',
        'nav-break':'990px',
        'small-desktop': '1150px',
        'desktop': '1350px',
      },
      backgroundImage: {
        'div-pattern': "url('./src/assets/images/Group-2.svg')",
        'gradient-overlay': 'linear-gradient(0deg, rgba(255,249,240,0.9999999999999999) 0%, rgba(255,255,255,0.27999999999999997) 100%)',
      }
    },
  },
  plugins: [],
}
