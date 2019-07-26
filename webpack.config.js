const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [path.resolve(__dirname, 'src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].buddle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'Hello World App',
      hash:true,
      minify:{
        removeContents:true,
        collapseWhitespace:false,
        minifyCSS:true
      },
      filename:'index.html',
      template:'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "./[name].buddle.css"
    })
  ]
}
