'use strict'

/*
 * Babel
 */
const Babel = {
  mode: "development",
  entry: `./src/js/index.js`,
  output: {
    path: `${__dirname}`
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
