const path = require('path')

function addStyleResource (rule) {
  const patterns = [
    path.resolve(__dirname, './src/sass/_tokens.scss'),
    path.resolve(__dirname, 'node_modules/@lkmx/flare/src/sass/functions/**/*.scss'),
    path.resolve(__dirname, 'node_modules/@lkmx/flare/src/sass/tokens/**/*.scss'),
    path.resolve(__dirname, 'node_modules/@lkmx/flare/src/sass/components/**/*.scss'),
  ]
  rule.use('style-resource').loader('style-resources-loader').options({patterns})
}

module.exports = {
  siteName: 'Gridsome',
  plugins: [

  ],
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
  },
}
