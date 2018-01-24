const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const pug = require('./webpack/pug.module');
const file = require('./webpack/file.module');
const postcss = require('./webpack/postcss.module');
const babel = require('./webpack/babel.module');
const svgSprite = require('./webpack/svg-sprite.module');

module.exports = merge([
  {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/app.js',
    },
    plugins: [
      new CleanWebpackPlugin(['build']),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/pages/index.pug'),
      }),
      // @End added page template
      new StyleLintPlugin({
        configFile: './stylelint.config.js',
        files: 'src/**/*.scss',
      }),
      new ExtractTextPlugin('css/index.css'),
      new SpriteLoaderPlugin(),
    ],
  },
  pug(),
  file(),
  postcss(),
  babel(),
  svgSprite(),
]);