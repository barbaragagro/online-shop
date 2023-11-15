/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customblue: '#02B3D4',
        customorange: '#FF7C00',
        customdarkblue: '#273C40',
        customdarkorange: '#68523E',
        custompaleorange:'#D1CBC5'
      },
    },
  },
  plugins: [],
};
