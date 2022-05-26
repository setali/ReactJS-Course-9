const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}

module.exports = (env, { mode }) => {
  if (mode === 'production') {
    config.plugins.push(new CleanWebpackPlugin())
  } else if (mode === 'development') {
    config.devServer = {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: true,
      port: 3000,
      open: true,
      client: {
        overlay: false
      }
    }
  }
  
  return config
}
