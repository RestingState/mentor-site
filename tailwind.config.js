/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bright-red': 'hsl(12, 88%, 59%)',
      'dark-blue': 'hsl(228, 39%, 23%)',
      'dark-grayish-blue': 'hsl(227, 12%, 61%)',
      'very-dark-blue': 'hsl(233, 12%, 13%)',
      'very-pale-red': 'hsl(13, 100%, 96%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.75rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2.25rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.75rem'],
    },
    extend: {
      backgroundImage: {
        mobile: "url('./images/bg-simplify-section-mobile.svg')",
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
