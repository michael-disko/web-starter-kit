module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.pug$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'pug-loader',
            options: {
              pretty: true,
              cache: true,
            },
          },
        },
      ],
    },
  };

  return config;
};
