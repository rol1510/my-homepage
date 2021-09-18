module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        round: ["Nunito"],
      },
    },
  },
  variants: {
    backgroundColor: ["active", "hover"],
  },
  plugins: [],
};
