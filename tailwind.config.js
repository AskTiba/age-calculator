/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Light-grey": "hsl(0, 0%, 86%)",
        "Smokey-grey": "hsl(0, 1%, 44%)",
        "Off-black": "hsl(0, 0%, 8%)",
        "Light-red": "hsl(0, 100%, 67%)",
        Purple: "hsl(259, 100%, 65%)",
      },
      backgroundColor: {
        "Off-white": "hsl(0, 0%, 94%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
