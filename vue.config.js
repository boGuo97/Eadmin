// 基础路径 注意发布之前要先修改这里 打包 / 前加 .    开发去掉 .
let publicPath = '/';

module.exports = {
  publicPath,
  devServer: {
    publicPath
  },
  lintOnSave: false,
  // 打包不生成 map文件
  productionSourceMap: false
}