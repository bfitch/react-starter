// run: webpack-dev-server --hot

module.exports = {
  entry: {
    // app: ["webpack/hot/dev-server", "./app/main.js"]
    app: ["./app/main.js"]
  },
  output: {
    filename: "dist/bundle.js"
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader",
        exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          optional: ["runtime"],
          stage: 0
        }
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".json"]
  }
};
