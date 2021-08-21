import * as path from "path";
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

import { HotModuleReplacementPlugin } from "webpack";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devtool: "eval-source-map",
  devServer: {
    host: "localhost",
    port: 9000,
    contentBase: path.resolve(__dirname, "../dist"),
    open: "chrome",
    hot: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "/public/index.html",
      favicon: path.resolve(__dirname, "../public/favicon_dev.ico"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "../src/assets")],
      },
    ],
  },
});
