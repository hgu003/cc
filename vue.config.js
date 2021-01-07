const path = require('path');
module.exports = {
    publicPath:'',
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [path.resolve(__dirname, "src/assets/lessvariate.less")] // 引入全局样式变量
        }
  },
    // devServer: {
    //   proxy: 'http://community.zhuishushenqi.com'
    // }
}