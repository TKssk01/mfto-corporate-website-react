module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // ソースマップの生成を無効にする
      webpackConfig.devtool = false;
      return webpackConfig;
    },
  },
};
