const config = require("next-ui-config/tailwind.config")

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...config,
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ]
}
