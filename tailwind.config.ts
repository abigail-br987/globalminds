import type { Config } from "tailwindcss";

const config: Config = {
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
        gbYellow: '#FBD261',
        gsLightBlue: '#ADDAE9',
        gsLightPurple: '#ADA3DA',
        gsBrightPink: '#F34F87',
        gsPink: '#F678BE',
        gsLightYellow: '#FBD160',
        gsYellow: '#FBD160'
      },
      fontFamily: {
        rubik: ["Rubik"],
        mono: ['Fira Code', 'monospace'],
        lucidity: ["Lucidity"],
        gotaRegular: ["GotaRegular"],
        gotaLight: ["GotaLight"]
      },
    },
  },
  plugins: [],
};
export default config;
