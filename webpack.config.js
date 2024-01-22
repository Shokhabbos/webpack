const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
    sub: "./strange.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@assets": "./assets",
      "@": "./",
    },
  },
  devServer: {
    port: 2323,
    host: "0.0.0.0",
    allowedHosts: "all",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello World in Webpack",
      inject: "body",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(), //
  ],
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|ttf|otf)/,
        use: ["file-loader"],
      },
    ],
  },
};
