const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CompileTimePlugin = require('webpack-compile-time-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pug = require('./webpack/pug.module');
const file = require('./webpack/file.module');
const postcss = require('./webpack/postcss.module');
const babel = require('./webpack/babel.module');
const svgSprite = require('./webpack/svg-sprite.module');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: 'body',
      minify: false,
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/pages');

module.exports = merge([
  {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/[name].js'
    },
    plugins: [
      new CleanWebpackPlugin(['build']),
      new StyleLintPlugin({
        configFile: './.stylelintrc',
        files: 'src/**/*.scss'
      }),
      new ExtractTextPlugin('css/index.css', {
        disable: process.env.NODE_ENV !== 'production'
      }),
      new SpriteLoaderPlugin(),
      new CompileTimePlugin(),
      new BundleAnalyzerPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }),
    ].concat(htmlPlugins)
  },
  pug(),
  file(),
  postcss(),
  babel(),
  svgSprite()
]);
