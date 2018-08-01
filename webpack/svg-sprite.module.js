const path = require('path');

module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: [
            path.resolve(__dirname, '../src/assets/sprite'),
          ],
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: 'images/sprite.svg',
              },
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                ],
              },
            },
          ],
        },
      ],
    },
  };

  return config;
};
