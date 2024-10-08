/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        gbRed: '#E2464F',
        gbGreen: '#74B7A1',
        gbBlue: '#2D96A2',
        gbBlack: '#2B2B2B',
        gbWhite: '#F8F8F8',
        gbYellow: '#fbd261',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        lucidity: ["Lucidity"],
        gotaRegular: ["GotaRegular"],
        gotaLight: ["GotaLight"]
      },
    },
  },
}