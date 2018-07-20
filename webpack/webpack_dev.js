var webpack = require('webpack'),
	merge = require('webpack-merge'),
	base_config = require('./webpack_base'),
	path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

const _ROOT = path.resolve('./');

module.exports = merge(base_config, {
  // 定义应用入口
  entry: {
    // 打包第三方库作为公共包
    vendor: [
      'mockjs'
    ]
  },
  output: {
    filename: 'js/app.js',
    publicPath: "http://localhost:3001/"
  },
  resolve: {
    alias: {
      "mock": path.join(_ROOT, 'mock')
    }
  }
});

// 开发环境 ====================
// 配置开发服务器
module.exports.devServer = {
  historyApiFallback: true,
  hot: true,
  proxy: {},
};
module.exports.devtool = '#cheap-module-eval-source-map';
module.exports.plugins = [
  // 抽离公共js
  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: 'js/vendor.js',
  }),
  // 指定常量
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(process.env.NODE_ENV)
  }),
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
  }),
  new HtmlWebpackPlugin({
    template: path.join(_ROOT, 'index.html')
  }),
  new webpack.HotModuleReplacementPlugin()
];