var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:"./src/index.js",
  output:{
    path:path.resolve(__dirname,"./dist"),
    filename:"boundle.js"
  },

  module:{
    rules:[
      {
        test:/(\.js|\.jsx)$/,
        use:'babel-loader',
        exclude:/node_modules/
      }
    ]
  },

  devServer:{
    clientLogLevel:"warning",
    host:"localhost",
    port:"9001",
    hot:true,
  },

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"index.html",
      inject:true
    })
  ]
}
