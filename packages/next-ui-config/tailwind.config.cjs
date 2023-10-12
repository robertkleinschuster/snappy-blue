const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
        nextui({
            defaultTheme: 'dark'
        }),
    ],
};
