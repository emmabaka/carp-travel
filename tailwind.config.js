/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    backgroundImage: {
      hero: "url('/hero.png')",
      about: "url('/about.jpg')",
    },
    screens: {
      mobile: '320px',
      mobile2: '400px',
      tablet: '768px',
      desktop: '1280px',
    },
    colors: {
      white: '#fff',
      red: '#ff5757',
      buttonHover: 'rgba(255, 255, 255, 0.2)',
      backgroundInput: 'rgba(255, 255, 255, 0.05)',
      backgroundDefault: 'rgba(255, 255, 255, 0.10)',
      backgroundSections: 'rgba(2, 15, 8, 0.5)',
      menuBackground: 'rgba(1, 10, 5, 0.75)',
      transparent: 'transparent',
    },
    fontFamily: {
      inter: ['Inter', ' sans-serif'],
    },
    fontSize: {
      10: '10px',
      12: '12px',
      13: '13px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      28: '28px',
      30: '30px',
      32: '32px',
      33: '33px',
      37: '37px',
      40: '40px',
      43: '43px',
      67: '67px',
      98: '98px',
    },
  },

  plugins: [],
};
