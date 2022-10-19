/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['OverPass', 'ui-sans-serif'],
      serif: ['ui-serif'],
    },
    extend: {
      backgroundColor: ['active'],
      colors: {
        cOrange: 'hsl(25, 97%, 53%)',
        lGrey: 'hsl(217, 12%, 63%)',
        mGrey: 'hsl(216, 12%, 54%)',
        dBlue: 'hsl(213, 19%, 18%)',
        vdBlue: 'hsl(216, 12%, 8%)',
      },
    },
  },
  plugins: [],
}
