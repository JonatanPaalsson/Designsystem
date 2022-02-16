const plugin = require("tailwindcss/plugin");
const { mergeDeepRight } = require("ramda");
const { button } = require("./shared/button");

module.exports = plugin(({ addComponents }) => {
  const component = {
    ".blueberry": mergeDeepRight(button, {
      "&.btn": {
        color: "blue",
      },
    }),
  };

  addComponents(component);
});
