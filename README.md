# vue-vuex-webpack
vue2 + vuex2 + webpack2 快速构建
版本：v2.x+


# 运行
##### 安装依赖
```
$ npm i
```
##### 开发模式：
```
$ npm run dev
```
##### 生产模式：
```
$ npm run build
```
# 技术栈

- vue ^2.5.2
- vue-router ^2.8.1
- vuex ^2.5.0
- iview ^2.10.0
- webpack ^2.5.1
- mockjs ^1.0.1-beta3
- es6-babel ^6.24.1
- sass
- postcss.autoprefixer

# 目录结构

.
|____.babelrc		
|____favicon.ico
|____index.html
|____LICENSE
|____README.md
|____webpack			// webpack 配置
| |____webpack_base.js	// 通用配置
| |____webpack_dev.js	// 开发模式配置
| |____webpack_pro.js	// 生产模式配置
|____.gitignore
|____package-lock.json
|____package.json
|____postcss.config.js 		// postcss配置文件
|____src					// 参与打包的目录
| |____App.vue			// 根组件
| |____main.js			// webpack 预编译入口
| |____common			// 通用布局类型组件
| | |____ …
| |____modules			// 模块
| | |____ ...
| |____sass				// sass样式
| | |____base.scss		
| | |_____variables.scss
| | |____analysdk-theme	// iview 定制化样式
| | |____ ….
| | |_____common.scss
| |____store				// vuex
| | |____index.js
| |____router				// 路由
| | |____index.js
| | |____modules			// 路由命名空间
| | | |____home.js