module.exports = {
  entry: './src/root.jsx',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js(x)*$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }],
  },
  devtool: 'source-map',
};
