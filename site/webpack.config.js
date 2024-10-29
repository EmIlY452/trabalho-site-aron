const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolver(__dirnames, "dist"),
        filename: "bundle.js",
    },
    watch: true,
};