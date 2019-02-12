const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

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
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? 'bridget.[hash].css' : 'bridget.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
};
