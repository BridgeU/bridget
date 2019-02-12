const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bridget.js',
    library: 'bridget',
    libraryTarget: 'umd'
  },
  externals: [
    'jquery',
    'popper.js',
  ],
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bridget.css' })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
};
