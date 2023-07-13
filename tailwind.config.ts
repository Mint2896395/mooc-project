import { type Config } from "tailwindcss";

export default {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      overflow: {
        clip: 'clip',
      },
      margin: {
        'content-box': 'content-box',
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
} satisfies Config;
