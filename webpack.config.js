const webpack = require('webpack')
const path = require('path')

module.exports = [{
  name: 'client',
  mode: 'production',
  context: path.resolve(__dirname),
  entry: {
    javascript: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/jquery.range-slider.js',
    publicPath: 'dist/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}]

