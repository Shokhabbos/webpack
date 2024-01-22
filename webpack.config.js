const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.ts",
    sub: "./strange.ts",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
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
