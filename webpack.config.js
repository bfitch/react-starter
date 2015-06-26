// run: webpack-dev-server --hot

module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./app/main.js"]
  },
  output: {
    filename: "dist/bundle.js"
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader",
        exclude: /(node_modules|bower_components)/ }
    ],
    loaders: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel" }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".json"]
  }
};
