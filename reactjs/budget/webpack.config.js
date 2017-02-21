var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  //babel重要的loader在这里
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_PATH,
        use:[
            'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        // exclude: /node_modules/,
        use: [
        'style-loader',
        'css-loader',
        'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'My first react app'
    })
  ]
}