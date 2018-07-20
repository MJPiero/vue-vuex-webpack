const webpack = require('webpack'),
  merge = require('webpack-merge'),
  base_config = require('./webpack_base'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanPlugin = require('clean-webpack-plugin');

const _ROOT = path.resolve('./');
const build_root = 'build';

module.exports = merge(base_config, {
  entry: {
    // 打包第三方库作为公共包
    vendor: [
      'mockjs'
    ]
  },
  output: {
    path: path.join(_ROOT, build_root),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    publicPath: "./"
  },
  resolve: {
    alias: {
      "mock": path.join(_ROOT, 'mock')
    }
  }
});

module.exports.devtool = false;
module.exports.plugins = [
  // 清理文件
  new CleanPlugin([build_root],{
    root: _ROOT,
  }),
  new ExtractTextPlugin({
    filename: '[name].[hash].css',
    allChunks: true
  }),
  // 压缩js
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    // 最紧凑的输出
    beautify: false,
    // 删除所有的注释
    comments: false,
    compress: {
      // 在UglifyJs删除没有用到的代码时不输出警告  
      warnings: false,
      // 删除所有的 `console` 语句
      // 还可以兼容ie浏览器
      drop_console: true,
      // 内嵌定义了但是只用到一次的变量
      collapse_vars: true,
      // 提取出出现多次但是没有定义成变量去引用的静态值
      reduce_vars: true,
    }
  }),
  // 抽离公共js
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.[hash].js'
  }),
    // 设置常量
  new webpack.DefinePlugin({
    __ENV__: JSON.stringify(process.env.NODE_ENV)
  }),
  // 自动生成HTML
  new HtmlWebpackPlugin({
    filename: path.join(_ROOT, build_root + '/index.html'),
    template: path.join(_ROOT, 'index.html'),
    inject: true
  })
];
