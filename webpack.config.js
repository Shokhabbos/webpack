const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode:"development",
   entry: {
    main:'./src/index.js',
    sub:"./src/strange.js"
   },
   output:{
    filename:"[name].[contenthash].js",
    path:path.join(__dirname,"dist")
 
},
plugins:[
    
        new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(), //
    
]
}