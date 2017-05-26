const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const _ROOT = path.resolve('./');

module.exports = {
	// 定义应用入口
  	entry: {
    	app: path.join(_ROOT, 'src/main.js'),
    	// 打包第三方库作为公共包
    	vendor: [
      		'vue',
      		'vuex',
      		'vue-router'
    	]
  	},
  	resolve: {
  		modules: [
  			path.join(_ROOT, 'node_modules'),
  			path.join(_ROOT, 'src')
  		],
  		alias: {
  			"vue$": 'vue/dist/vue.esm.js',
  			"modules": path.join(_ROOT, 'src/modules'),
  			"components": path.join(_ROOT, 'src/components'),
  			"store": path.join(_ROOT, 'src/store'),
  			"api": path.join(_ROOT, 'src/api'),
  			"router": path.join(_ROOT, 'src/router')
  		},
    	// 约定省略后缀
    	extensions: [".js", ".json", ".vue"],
	},
	module: {
		rules: [
		/* 用来解析vue后缀的文件 */
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					scss: ExtractTextPlugin.extract({
						use: ['css-loader?minimize', 'postcss-loader', 'sass-loader'],
						fallback: 'vue-style-loader'
					}),
					css: ExtractTextPlugin.extract({
						use: ['css-loader?minimize', 'postcss-loader', 'sass-loader'],
						fallback: 'vue-style-loader'
					})
				}
			}
		},
		{
			test: /iview\/.*?js$/,
			loader: 'babel-loader?cacheDirectory'
		},
		/* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
		{
			test: /\.js$/,
			loader: 'babel-loader?cacheDirectory',
			/* 排除模块安装目录的文件 */
			exclude: /node_modules/
		}, 
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: ['css-loader?minimize', 'postcss-loader'],
				fallback: 'style-loader'
			})
		},
		{
			test: /\.scss/,
			use: ExtractTextPlugin.extract({
				use: ['sass-loader', 'postcss-loader'],
				fallback: 'style-loader'
			})
		},
		{
			test: /\.(gif|jpg|png)\??.*$/,
			loader: 'url-loader?limit=1024&name=images/[name].[ext]'
		},
		{
			test: /\.(woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
		}
		],
	}
}