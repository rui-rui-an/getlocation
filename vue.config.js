const path = require('path')
function resolve (dir) {
  // 配置别名
  return path.join(__dirname, dir)
}
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // 样例
  devServer: {
    // 开启代理服务器 (方式1)   配置多个代理
    proxy: {
      '/api': {
        // '/api'是自行设置的请求前缀
        target: 'http://localhost:5000',
        // ws: true,//用于支持websocket
        changeOrigin: true, // 用于控制请求头中的host值
        pathRewrite: { '^/api': '' } // 路径重写，（正则）匹配以api开头的路径为空（将请求前缀删除）
      }
    }
  }
})
