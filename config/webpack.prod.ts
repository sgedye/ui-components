import * as path from "path";
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import("webpack").Configuration} */
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[contenthash].bundle.min.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    // assetModuleFilename: "assets/[name].[contenthash][ext]",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "/public/index.html",
      favicon: path.resolve(__dirname, "../public/favicon_prod.ico"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "../src/assets")],
      },
    ],
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
