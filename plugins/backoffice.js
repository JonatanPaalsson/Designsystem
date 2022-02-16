const plugin = require("tailwindcss/plugin");
const { mergeDeepRight } = require("ramda");
const { button } = require("./shared/button");

module.exports = plugin(({ addComponents }) => {
  const component = {
    ".backoffice": mergeDeepRight(button, {
      "&.btn": {
        color: "pink",
      },
    }),
  };

  addComponents(component);
});
