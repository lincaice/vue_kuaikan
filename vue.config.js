const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./kuaikan.scss";`
      }
    }
  },

  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {
      '/api': {
        target: "https://www.kuaikanmanhua.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
