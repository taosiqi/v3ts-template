'use strict'
// 所有配置项说明请参见 https://cli.vuejs.org/config/
const path = require('path')
const defaultSettings = require('./src/config/index.js')
const CompressionPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: defaultSettings.port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    // 全局scss变量，不需要每个文件import了
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/styles/variable.scss';
        @import '@/styles/mixins.scss';
        `
      }
    }
  },
  configureWebpack: {
    name: defaultSettings.name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // 提前预加载提高切换路由的体验
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // 当页面太多时，会导致太多无意义的请求 https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
    config.plugins.delete('prefetch')
    //开启gzip压缩，需要服务端支持
    config.plugin('CompressionPlugin').use(CompressionPlugin, [])
    // 配置svg svg雪碧图
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
    // runtime.js 处理策略 打包成一个单独的文件放进index.html https://github.com/PanJiaChen/vue-element-admin/blob/master/vue.config.js
    config.when(defaultSettings.isProduction, config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.runtimeChunk('single')
    })
  }
}
