/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
        About: ["Playfair Display", "serif"],
        Arimo: ["Arimo", "sans-serif"],
      },
      colors: {
        AAprimary: "#0b192f",
        //-- AAsecondary: "#64ffda",
        // AAsecondary: "#768ad6",
        AAsecondary: "#7e92d9",
        AAError: "#ff6489",
        AAtertiary: "#112340",
        ResumeButtonHover: "#153040",
        MobileNavBarColor: "#112340",
        StartupBackground: "#020c1b",
        // Add Prfile card colors
        AALightColor: "#5ddcff"
      },
      // Add Prfile card colors
      boxShadow: {
        'custom-glow': '0 0 30px #5ddcff',
      },
      keyframes: {
        rotateBorder: {
          '0%': { borderColor: '#5ddcff' },
          '33%': { borderColor: '#3c67e3' },
          '66%': { borderColor: '#4e00c2' },
          '100%': { borderColor: '#5ddcff' },
        },
      },
      animation: {
        rotateBorder: 'rotateBorder 2s linear infinite',
      },
      
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      
      
      // colors:{
      //   cardBg: '#191c29',
      //   textHover: 'rgb(88 199 250 / 100%)',
      // }
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
  variants: {
    scrollbar: ["rounded"],
  },
};
