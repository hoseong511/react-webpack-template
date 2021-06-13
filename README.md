## Use it!
```cmd
npx degit hoseong511/react-webpack-template [Project name]
```
## Run
```npm run dev```: webpack-dev-server --mode development
## Build
```npm run build```: webpack --mode production

## package.json
  ```json
  {
    "devDependencies": {
      "@babel/core": "^7.14.3",
      "@babel/plugin-transform-runtime": "^7.14.3",
      "@babel/preset-env": "^7.14.2",
      "@babel/preset-react": "^7.14.5",
      "autoprefixer": "^10.2.5",
      "babel-eslint": "^10.1.0",
      "babel-loader": "^8.2.2",
      "copy-webpack-plugin": "^8.1.1",
      "css-loader": "^5.2.5",
      "eslint": "^7.28.0",
      "eslint-config-airbnb": "^18.2.1",
      "eslint-config-airbnb-base": "^14.2.1",
      "eslint-plugin-import": "^2.23.4",
      "eslint-plugin-jsx-a11y": "^6.4.1",
      "eslint-plugin-react": "^7.24.0",
      "eslint-plugin-react-hooks": "^4.2.0",
      "html-loader": "^2.1.2",
      "html-webpack-plugin": "^5.3.1",
      "postcss": "^8.3.0",
      "postcss-loader": "^5.3.0",
      "sass": "^1.33.0",
      "sass-loader": "^11.1.1",
      "style-loader": "^2.0.0",
      "webpack": "^5.37.1",
      "webpack-cli": "^4.7.0",
      "webpack-dev-server": "^4.0.0-beta.3"
    },
    "browserslist": [
      "> 1%",
      "last 2 versions"
    ],
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
    }
  }
  ```
## webpack.config.js
  ```js
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
  ```
  ## .babelrc.js
  ```js
  module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'], 
    plugins: [
      ['@babel/plugin-transform-runtime'] // 비동기처리를 위한 플러그인
    ]
  }
  ```
  ## .eslintrc.js
  ```js
      module.exports = {
        parser: 'babel-eslint',
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true,
          },
        },
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          // react
          'airbnb',
          'airbnb/hooks',
          'plugin:import',
        ],
        rules: {
        },
      };
  ```