var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
  devtool: 'eval-source-map',
  devServer: {    
    contentBase: './dist',    
    overlay: true,    
    open: true,   
    watchOptions: {   
      ignored: /node_modules/   
    }   
  }
});