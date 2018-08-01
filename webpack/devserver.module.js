module.exports = () => {
  const config = {
    devServer: {
      port: 3000,
      // https: true,
      // useLocalIp: true,
      compress: true,
      stats: 'errors-only',
      open: true,
      // lazy: true,
      // watchOptions: {
      //   poll: true,
      // }
    },
  };

  return config;
};
