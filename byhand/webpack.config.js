var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"boundle.js"
  },
  devServer:{
    clientLogLevel:"warning",

    host:"localhost",
    port:"9000",
    hot:true
  },

  module:{
    rules:[
      {
        test:/(\.js|\.jsx)$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      },
    ]
  },

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:"index.html",
      inject:true
    })
  ]
}