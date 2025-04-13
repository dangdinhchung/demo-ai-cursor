/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#007AFF',
          dark: '#2355BE',
        },
        success: '#34CB49',
        danger: '#F80000',
        warning: '#F9AD3D',
      },
    },
  },
  plugins: [],
} 