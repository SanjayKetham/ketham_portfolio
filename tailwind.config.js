/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: {
          900: '#0D1B2A',
        },
      },
    },
  },
  plugins: [],
}

/* src/index.css or src/App.css */

// body {
//   background-color: #0D1B2A; /* Dark blue background */
//   color: #ffffff; /* White text color */
// }


