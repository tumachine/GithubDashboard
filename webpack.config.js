const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
      rules: [
        {
          test: /\.tsx$/,
          use: 'ts-loader',
          // exclude: /node-modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
  },
  resolve: {
      extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
}