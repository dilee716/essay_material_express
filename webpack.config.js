const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: './client/src/index.js'
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets:['@babel/react']
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  devServer: {
    overlay:true,
    contentBase: "./build",
    hot: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  optimization: {
    minimize: false
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'views/js'),
  },
};
