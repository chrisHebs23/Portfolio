const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

// root path for this project
const ROOT = __dirname;

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT, "public/index.html"),
      favicon: "./public/favicon.ico",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.css$/i,
        use: [require.resolve("style-loader"), require.resolve("css-loader")],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.ico$/,
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
    ],
  },
};
