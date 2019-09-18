/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
/* eslint-enable */

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.join(__dirname, './docs'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' }],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'app',
      title: 'Denver Startup Week',
      headHtmlSnippet: '<style>body { margin: 0; }</style>',
      meta: [
        { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      ],
    }),
  ],
};
