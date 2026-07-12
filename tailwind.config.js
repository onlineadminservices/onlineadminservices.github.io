/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#1A1A1A',
        cream: '#F8F4EE',
        wood: '#8B6E4F',
        'wood-dark': '#2D1F14',
        'wood-mid': '#6B5744',
        'wood-light': '#C8B8A0',
        border: '#E8DDD0',
      },
      letterSpacing: {
        brand: '0.25em',
      },
    },
  },
  plugins: [],
}
