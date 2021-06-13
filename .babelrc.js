module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'], 
  plugins: [
    ['@babel/plugin-transform-runtime'] // 비동기처리를 위한 플러그인
  ]
}