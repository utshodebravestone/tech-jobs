const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-gray-1": "#dadce0",
        "custom-green-1": "#137333",
        "custom-blue-1": "#1967d2",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
