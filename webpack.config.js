// 用于拼接路径
var path = require('path');

module.exports = {
  // 指定项目入口
  entry: path.resolve(__dirname, 'index.jsx'),

  // 对输出结果描述
  output: {
    // 输出路径
    path: path.resolve(__dirname, 'build'),
    // 输出的文件名
    filename: 'bundle.js'
  },

  // 配置模块使用的加载器
  module: {
    loaders: [
      {
        // 假设我们拥有一个编译sass加载器
        // 匹配字符串
        test: /\.scss$/,
        // 使用的加载器，不可以省略加载器的后缀-loader
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}