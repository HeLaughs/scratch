/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      placeholderColor: ['hover', 'active'],
    },
    fontFamily: {
      'sans': ['Rubik', 'sans'],
    },
  },
  plugins: [],
}

