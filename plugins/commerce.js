const plugin = require("tailwindcss/plugin");
const { mergeDeepRight } = require("ramda");
const { button } = require("./shared/button");

module.exports = plugin(({ addComponents }) => {
  const component = {
    ".commerce": mergeDeepRight(button, {
      "&.btn": {
        color: "green",
      },
    }),
  };

  addComponents(component);
});
