const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      }, {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8192
          }
        }],
        exclude: /node_modules/
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/static/index.html'
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' }
    ]),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist')
  }
};