module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      red: "#FF0000",
      gold: "#9D8420",
      black: "#0A0903",
      white: "#D8DAD3",
    },
    extend: {},
  },
  plugins: [
    require("./plugins/btn")
  ],
}
