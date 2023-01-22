/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        indieFlower: ["Indie Flower", "serif"],
        patrickHand: ["Patrick Hand", "serif"],
      },
      colors: {
        primary: "#FF595A",
        blackColor: "#3a3a3a",
        whiteColor: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
