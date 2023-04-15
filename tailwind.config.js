/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      lineClamp: ['hover'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
};
