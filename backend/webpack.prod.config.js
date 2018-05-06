const baseConfig = require('./webpack.base.config');
const merge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge.smart(baseConfig, {
  module: {
    rules: [
    ]
  },

  plugins: [new UglifyJsPlugin()],

  mode: 'production'
});
