module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        round: ["Nunito"],
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out 1",
        appear: "appear 250ms ease-in-out 1",
      },
      keyframes: {
        wiggle: {
          "0% 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
        appear: {
          "0%": { "transform-origin": "top right", transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      spacing: {
        100: "25rem",
        200: "50rem",
        225: "55rem",
        250: "60rem",
      },
    },
  },
  variants: {
    backgroundColor: ["active", "hover", "focus"],
    borderWidth: ["active", "hover", "focus"],
  },
  plugins: [],
};
