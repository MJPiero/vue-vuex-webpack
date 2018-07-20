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

<pre>
.
├── README.md           
├── dist                     // 项目build目录
├── images                   // 图片文件
├── webpack	             // webpack配置文件
│   ├── webpack_base.js              // 基本配置
│   ├── webpack_dev.js               // 开发环境配置 
│   ├── webpack_pro.js             // 生产环境配置
├── mock                     // 模拟数据文件
│   ├── user.js              
│   ├── ...             
├── src                      // 生产目录
│   ├── api                  // 接口相关文件

│   ├── common                  // 通用布局类型组件

│   ├── components           // 各种组件
│   ├── modules              // 各种页面
│   ├── router               // 路由配置
│   ├── sass                 // sass样式文件
│   ├── store                // vuex目录文件
│   └── App.vue              // 根组件
│   └── main.js              // Webpack 预编译入口         
├── index.html               // 项目入口文件
├── .gitignore               // git忽略文件
├── package.json             // 项目配置文件
├── postcss.config.js        // postcss配置文件
</pre>