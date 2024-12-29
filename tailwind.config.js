/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBorder: "#646655", // Custom border color
        customBorderLight: "#64665550", // Custom border color
        background: "#343628", // Custom background color
        blue: "#43609C",
        highlightedBlue: "#76E6FF",
        bgBlue: "#F5FDFF",
        orange: "#FFA500", // Natural orange color
        // orange: "#FFC616", // Natural orange color
        
        white: "#FFFFFF", // Natural white color
        block: "#7c7c7c", // Natural black color
        
        olive:'#343628',
        oliveLight:'#646655',

        softYellow:'#FFC107',
        lightGray:'#F5F5F5',
        /////
        bgBlack:"#19191B",
        bgBlackHighlight:'#302F33',
         bgBlackHighlightLight:'#302F3350',
         back:'#535252',



        //  Light theme
        lightMode:"#EFF0F4",
        lemonYellow:"#B2F142",
        lightGry:"#CACDD2",

        //darkMode
        darkMode:'#393939',


        //purple theme
        bgPurple:"#070A26",
        bgCard:"#863CFF",
        bgYellow:"#C8FF2E",
        bgLightPurple:"#OOE0FF"


        //cosmos theme
        ,cosGray:"#EBE9E9",
        cosBlack:"#0A0A0A",
        jet:"#1D1D1D",
        f11:"#6B6868",


        //green
        highGreen:"#40EE83",
        
        highOrange:"#FF381A",
        // highOrange:"#EB5939",
        //gray
        highGray:"#f2f2f2",
        backGray:"#d9d9d9"

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #262525, #1D1D1D)',
      },
      borderRadius: {
        "20px": "20px", // Custom border radius
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat font family
        poppins: ["Poppins", "sans-serif"], // Add Poppins font family
        syne: ["Syne", "sans-serif"], // Add Poppins font family
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
