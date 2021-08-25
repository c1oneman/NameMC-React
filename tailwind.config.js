module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Roboto Mono"', "monospace"],
      // sans: ['"Montserrat"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
