/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      fontFamily: {
        pirateOne: ['var(--font-pirate-one)'],
      },
      backgroundImage: {
        gradient:
          'linear-gradient(96deg, rgba(29, 29, 45, 0.25) 0%, rgba(216, 156, 99, 0.25) 97.83%), #232335',
      },
    },
  },
  plugins: [],
}
