const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
  configureWebpack: {
    devServer: {
      // disableHostCheck: true
      allowedHosts: ['www.corho.com'] // www.corho.com=>扫码授权后的回调地址
    },
    externals: {
      qc: 'QC'
    }
  }
})
