const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/js/main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "./public"), to: "./" }],
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
};
