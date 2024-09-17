/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
  theme: {
    extend: {
    },
  },
  plugins: [],
}