/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        service: '#7D7D7D',
        shop: '#705C45',
        shopping: '#EEEEEE',
        orange: '#87807A',
        blog: '#CBC5C5',
        'light-orange': '#87807A',
        advice: '#777776',
      },
    },
  },
  plugins: [],
};
