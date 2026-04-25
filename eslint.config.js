const js = require("@eslint/js");
module.exports = [
js.configs.recommended,
{
files: ["src/**/*.js", "routes/**/*.js"],
rules: { "complexity": ["error", 5] },
languageOptions: {
ecmaVersion: 2021,
globals: {
require:"readonly", module:"readonly",
exports:"readonly", console:"readonly"
}
}
},
{
files: ["tests/**/*.js"],
languageOptions: {
globals: {
require:"readonly", describe:"readonly",
test:"readonly", expect:"readonly"
}
}
}
];