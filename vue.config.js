const path = require('path')

module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Or array of paths
          resources: [
            path.resolve(__dirname, './node_modules/sass-rem/_rem.scss'),
            path.resolve(__dirname, './src/styles/utils/_variables.scss'),
            path.resolve(__dirname, './src/styles/utils/**/!(_variables).scss'),
          ],
        })
        .end()
    })
  },
  devServer: {
    port: 4200,
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        secure: false,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
