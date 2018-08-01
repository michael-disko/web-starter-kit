const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /(node_modules)/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: process.env.NODE_ENV !== 'production',
                  url: false
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: process.env.NODE_ENV === 'production' ? false : 'inline',
                  config: {
                    ctx: {
                      'cssnano': {},
                      'autoprefixer': {},
                      'postcss-import': {},
                      'postcss-font-magician': {},
                      'postcss-browser-reporter': {},
                      'postcss-flexbugs-fixes': {},
                      'precss': {},
                    },
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: process.env.NODE_ENV !== 'production'
                }
              }
            ],
          })),
        },
      ],
    },
  };

  return config;
};
