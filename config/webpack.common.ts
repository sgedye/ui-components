import * as path from "path";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, "../src/index.tsx"),
      path.resolve(__dirname, "../src/vendor.tsx"),
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
        exclude: /node_modules/i,
      },
      {
        test: /\.(js|ts)x?$/i,
        use: ["babel-loader", "ts-loader"],
        include: [path.resolve(__dirname, "../src")],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: "asset/resource",
        include: [path.resolve(__dirname, "../src/assets")],
        generator: {
          filename: "assets/[name].[contenthash].[ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|tff|otf|svg)$/,
        type: "asset/inline",
        include: [path.resolve(__dirname, "../src/assets")],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "../src"),
    },
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
