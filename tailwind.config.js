const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  darkMode: "class", // or 'media' or 'class'

  backgroundImage: {
    "profile-pattern":
      "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
    "footer-texture": "url('/img/footer-texture.png')",
  },
  theme: {
    extend: {
      colors: {
        trueGray: colors.gray,
        trueAmber: colors.amber,
        trueOrange: colors.orange,
        trueSky: colors.sky,
        trueRed: colors.red,
        truePurple: colors.purple,
        trueZinc: colors.zinc,
        trueEmerald: colors.emerald,
        trueBlue: colors.blue,
        truePink: colors.pink,
      },
    },
    fontFamily: {
      sans: ["Sora", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
