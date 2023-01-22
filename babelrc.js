module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
        },
      },
    ],
  ],
  plugins: [
    "@emotion/babel-plugin",
    "babel-plugin-twin",
    "babel-plugin-macros",
  ],
};
