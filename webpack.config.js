var path = require('path')
var webpack = require('webpack')
var config = {
  entry: [
    './client/index.js'
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins:[],
  module: {
        loaders: [
        { 
            test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader',
            query:{
                presets:['react','es2015','stage-0']
            }
        }
        ]
    }
}
module.exports = config;