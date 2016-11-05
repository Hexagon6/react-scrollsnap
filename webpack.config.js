module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  common: {
    devtool: 'eval-sourcemap'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
