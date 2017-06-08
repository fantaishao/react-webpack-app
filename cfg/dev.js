'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');
const babelLoaderConfig = {
  presets:['es2015','stage-0','react'],
  plugins:[
    ['import',{
      libraryName: 'antd',
      style: true //使用 style： true会把less文件也给加载进来
    }]
  ],
  cacheDirectory: true,

};

let config = Object.assign({}, baseConfig, {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  // devtool: 'eval-source-map',
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    })
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push(
//   {
//   test: /\.(js|jsx)$/,
//   loader: 'react-hot!babel-loader',
//   include: [].concat(
//     config.additionalPaths,
//     [ path.join(__dirname, '/../src') ]
//   ),
//   options: babelLoaderConfig
// }
{
      test: /\.(js|jsx)$/,
      loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelLoaderConfig)],  // react-hot-loader可以不用刷新页面, 如果用普通的dev-server的话会自动刷新页面
      exclude: /node_modules/,
    }
);

module.exports = config;
