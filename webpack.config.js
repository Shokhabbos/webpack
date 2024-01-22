const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    sub: "./src/strange.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist"),
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
      template: "./src/index.html",
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
