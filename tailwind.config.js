/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'pixel': 'url(./src/assets/cursor/cursor.png), auto',
        'pixel-pointer': 'url(./src/assets/cursor/pointer.png), pointer',
        'pixel-text' : 'url(./src/assets/cursor/text.png), text'
      }
    },
    colors: {
      'russian_violet': { 
        DEFAULT: '#352a55', 
        100: '#0b0811', 
        200: '#151122', 
        300: '#201933', 
        400: '#2a2244', 
        500: '#352a55', 
        600: '#554389', 
        700: '#7965b3', 
        800: '#a598cd', 
        900: '#d2cce6' 
      }, 
      'space_cadet': { 
        DEFAULT: '#3e3264', 
        100: '#0c0a14', 
        200: '#181427', 
        300: '#251e3b', 
        400: '#31284f', 
        500: '#3e3264', 
        600: '#5b4a93', 
        700: '#7f6fb6', 
        800: '#aa9fce', 
        900: '#d4cfe7' 
      }, 
      'blue_(munsell)': { 
        DEFAULT: '#0188a5', 
        100: '#001b21', 
        200: '#003743', 
        300: '#015264', 
        400: '#016e86', 
        500: '#0188a5', 
        600: '#01c1eb', 
        700: '#33d9fe', 
        800: '#77e6fe', 
        900: '#bbf2ff' 
      }, 
      'robin_egg_blue': { 
        DEFAULT: '#01cbcf', 
        100: '#00292a', 
        200: '#005253', 
        300: '#017b7d', 
        400: '#01a4a6', 
        500: '#01cbcf', 
        600: '#0ffafe', 
        700: '#4bfbfe', 
        800: '#87fcfe', 
        900: '#c3feff' 
      }, 
      'fluorescent_cyan': { 
        DEFAULT: '#0bffe6', 
        100: '#003530', 
        200: '#006a5f', 
        300: '#009f8f', 
        400: '#00d4bf', 
        500: '#0bffe6', 
        600: '#3bffeb', 
        700: '#6cfff0', 
        800: '#9dfff5', 
        900: '#cefffa' 
      }, 
      'snow': { 
        DEFAULT: '#fffdff', 
        100: '#660066', 
        200: '#cc00cc', 
        300: '#ff33ff', 
        400: '#ff99ff', 
        500: '#fffdff', 
        600: '#ffffff', 
        700: '#ffffff', 
        800: '#ffffff', 
        900: '#ffffff' 
      }, 
      'sunset': { DEFAULT: 
        '#ffd080', 
        100: '#4d3000', 
        200: '#996100', 
        300: '#e69100', 
        400: '#ffb433', 
        500: '#ffd080', 
        600: '#ffda99', 
        700: '#ffe3b3', 
        800: '#ffeccc', 
        900: '#fff6e5' 
      }, 
      'atomic_tangerine': { 
        DEFAULT: '#ff9e7d', 
        100: '#4d1300', 
        200: '#992600', 
        300: '#e63900', 
        400: '#ff6633', 
        500: '#ff9e7d', 
        600: '#ffb399', 
        700: '#ffc6b3', 
        800: '#ffd9cc', 
        900: '#ffece5' 
      }, 
      'bright_pink_(crayola)': { 
        DEFAULT: '#fe546f', 
        100: '#43000b', 
        200: '#860117', 
        300: '#c90122', 
        400: '#fe0f37', 
        500: '#fe546f', 
        600: '#fe758c', 
        700: '#fe97a9', 
        800: '#ffbac5', 
        900: '#ffdce2' 
      }, 
      'mexican_pink': { 
        DEFAULT: '#df0772', 
        100: '#2d0117', 
        200: '#59032e', 
        300: '#860445', 
        400: '#b2065c', 
        500: '#df0772', 
        600: '#f8258f', 
        700: '#fa5cab', 
        800: '#fc92c7', 
        900: '#fdc9e3' 
      },
      'transparent': 'rgba(0, 0, 0, 0)'
    },
    fontFamily: {
      pixelify: '"Pixelify Sans", sans-serif'
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}

