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
        "appear-top": "appear-top 300ms 1",
        "disappear-top": "disappear-top 150ms 1",
        move: "random-move 24s ease-out infinite",
        icon: "icon 1.5s ease-in-out 1",
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
        "appear-top": {
          "0%": { "transform-origin": "top", transform: "scaleY(0)" },
          "75%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        "disappear-top": {
          "100%": { "transform-origin": "top", transform: "scaleY(0)" },
          "0%": { transform: "scaleY(1)" },
        },
        "random-move": {
          "0% 100%": {
            "transform-origin": "bottom right",
            transform: "translate(-0.5rem, 0) scale(1)",
          },
          "33%": {
            "transform-origin": "bottom right",
            transform: "translate(5rem, 3.5rem) scale(1.1)",
          },
          "66%": {
            "transform-origin": "bottom right",
            transform: "translate(-1rem, 6rem) scale(.9)",
          },
        },
        icon: {
          "0% 100%": {
            //rotate it just a bit to avoid shaky text
            transform: "translate(0, 0) scale(1) rotate(0.2deg)",
          },
          "10%": {
            transform: "translate(0, .3rem) scale(.95) rotate(0.2deg)",
          },
          "35%": {
            transform: "translate(0, -1rem) scale(1.25) rotate(0.2deg)",
          },
        },
      },
      spacing: {
        100: "25rem",
        150: "37.5rem",
        200: "50rem",
        225: "55rem",
        250: "60rem",
      },
      screens: {
        mobile: { max: "700px" },
        desktop: { min: "701px" },
        half: { min: "701px", max: "980px" },
        full: { min: "981px" },
      },
      scale: {
        80: "0.8",
      },
    },
  },
  variants: {
    backgroundColor: ["active", "hover", "focus", "responsive"],
    borderWidth: ["active", "hover", "focus", "responsive"],
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};
