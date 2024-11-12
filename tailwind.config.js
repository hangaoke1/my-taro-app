/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-commonjs
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
};
