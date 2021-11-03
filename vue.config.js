/*
 * @Author: zhangjian
 * @Date: 2021-10-08 14:55:17
 * @LastEditTime: 2021-11-03 17:02:37
 * @LastEditors: zhangjian
 * @Description: 描述
 */

// eslint-disable-next-line
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  css: {
    requireModuleExtension: true
  },
  configureWebpack: {
    // module: {
    //   rules: [
    //   {
    //     test: /\.css$/,
    //     oneOf: [{
    //       resourceQuery: /module/,
    //       use: [
    //         'vue-style-loader',
    //         {
    //           loader: 'css-loader',
    //           options: {
    //             // 开启 CSS Modules
    //             modules: true,
    //             // 自定义生成的类名
    //             localIdentName: '[local]_[hash:base64:8]'
    //           }
    //         }
    //       ]
    //     }, {
    //       use: [
    //         'vue-style-loader',
    //         'css-loader'
    //       ]
    //     }]
    //   },
    //   {
    //     test: /\.scss$/,
    //     use: [
    //       'vue-style-loader',
    //       {
    //         loader: 'css-loader',
    //         options: {modules: true}
    //       },
    //       'sass-loader'
    //     ]
    //   }]
    // },
    plugins: [new MonacoWebpackPlugin()]
  }
};
