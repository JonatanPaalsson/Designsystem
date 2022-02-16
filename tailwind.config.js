module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("./plugins/backoffice"),
    require("./plugins/blueberry"),
    require("./plugins/commerce"),
  ],
};
