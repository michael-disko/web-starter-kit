module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|svg)$/i,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };

  return config;
};
