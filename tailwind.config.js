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
      hero: "url('/images/hero-bg.webp')",
      about: "url('/images/about-bg.webp')",
      services1: "url('/images/services-bg-01.webp')",
      services2: "url('/images/services-bg-02.webp')",
      services3: "url('/images/services-bg-03.webp')",
      services4: "url('/images/services-bg-04.webp')",
      services5: "url('/images/services-bg-05.webp')",
      chooseUs: "url('/images/choose-us-bg.webp')",
      gallery: "url('/images/gallery-bg.webp')",
      contactUs: "url('/images/contact-us-bg.webp')",
    },
    screens: {
      mobile: { min: '320px', max: '768px' },
      mobile2: '400px',
      tablet: '768px',
      desktop: '1280px',
      desktopL: '1440px',
    },
    colors: {
      white: '#ffffff',
      red: '#ff5757',
      buttonHover: 'rgba(255, 255, 255, 0.2)',
      submitButtonHover: 'rgba(255, 255, 255, 0.8)',
      backgroundInput: 'rgba(255, 255, 255, 0.05)',
      backgroundDefault: 'rgba(255, 255, 255, 0.10)',
      backgroundSections: 'rgba(2, 15, 8, 0.5)',
      backgroundSectionsDark: 'rgba(2, 15, 8, 0.75)',
      backgroundGallerySection: 'rgba(2, 15, 8, 0.85)',
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
      36: '36px',
      37: '37px',
      40: '40px',
      43: '43px',
      67: '67px',
      98: '98px',
    },
  },

  plugins: [require('autoprefixer')],
};
