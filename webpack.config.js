const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
//export
module.exports = {
  name: 'Toy',
  resolve: {
    extensions: ['.js', '.jsx'], // 확장자 생략하기
  },
  entry: './src/main',
  output: {
    path: path.join(__dirname, 'dist'), // output의 path는 절대경로를 사용!
    filename: 'bundle.[hash].js', // default-> dist
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //       options: {
      //         minimize: true,
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader', //3
          'postcss-loader', //2  // 순서가 중요하다.
          'sass-loader' // 1
        ]
      },
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: './myAssets'}
      ]
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 8083,
    open: true,
  },
} 