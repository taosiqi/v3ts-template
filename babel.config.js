const prodPlugins = []
const isProduction = require('./src/config/index.js').isProduction
if (isProduction) {
  //去掉生产环境中的console
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['component', { libraryName: 'element-plus', styleLibraryName: 'theme-chalk' }],
    [
      'import',
      {
        libraryName: '@icon-park/vue-next',
        libraryDirectory: 'es/icons',
        camel2DashComponentName: false
      }
    ],
    ...prodPlugins
  ]
}
