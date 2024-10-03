/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        // Override the Preflight styles for headers
        'h1, h2, h3, h4, h5, h6': {
          fontSize: 'revert',
          fontWeight: 'revert',
          lineHeight: 'revert',
          margin: 'revert'
        }
      })
    }
  ],
}

