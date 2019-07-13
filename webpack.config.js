/*
 * Babel
 */
const Babel = {
  mode: "development",
  entry: `./resources/src/js/index.js`,
  output: {
    path: `${__dirname}/resources`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      }
    ]
  }
}

module.exports = [
  Babel
]
