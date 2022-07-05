/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['EB Garamond', 'serif'],
        body: ['Inconsolata', 'monospace']
      }
    },
  },
  corePlugins: { preflight: false },
  plugins: [require('@tailwindcss/typography')],
};