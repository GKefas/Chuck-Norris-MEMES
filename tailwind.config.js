/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Chuck-Norris-Img':"url('/src/assets/Cuck Noris Jokes.png')"
      }
    },
  },
  plugins: [],
}