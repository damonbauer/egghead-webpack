var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  devtool: 'eval-source-map'
});