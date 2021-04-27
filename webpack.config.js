const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
  // 生产环境需要干一些事
  module.exports = {
    devtool: 'none',
    plugins: [new BundleAnalyzerPlugin()]
  }
} else {
  // 暂时还没想到做什么
  module.exports = {
    // module: {
    //   //   rules: [
    //   //     {
    //   //       test: /main\.js$/,
    //   //       use: [{
    //   //         loader: './loaders/var-loader'
    //   //       }]
    //   //     }
    //   //   ]
    //   // }
    // }
  }
}