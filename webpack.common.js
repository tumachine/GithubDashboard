const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
      rules: [
        {
          test: /\.tsx$/,
          use: 'ts-loader',
          exclude: /node-modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        }
      ]
  },
  resolve: {
      extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ],
}