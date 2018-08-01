module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g)$/i,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: 65,
                  speed: 4,
                },
              },
            },
          ],
        },
      ],
    },
  };

  return config;
};
