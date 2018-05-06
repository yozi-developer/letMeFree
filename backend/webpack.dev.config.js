const baseConfig = require('./webpack.base.config');
const merge = require("webpack-merge");

module.exports = merge.smart(baseConfig, {
  module: {
    rules: [
    ]
  },

  plugins: [],

  mode: 'development'
});
