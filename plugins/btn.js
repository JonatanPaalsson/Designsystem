const plugin = require("tailwindcss/plugin");
const { mergeAll } = require("ramda")

module.exports = plugin(
    ({addComponents}) => {

    const component = {
        ".btn": mergeAll({
            color: "white",



            "&.tile": {
                border: "1px solid blue",
                
            }

        })
    }

    addComponents(component)
}
)