/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // For Next.js
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",    // (Optional if you use /src/app/ with App Router)
  ],
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        bounceOnce: 'bounceOnce 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
