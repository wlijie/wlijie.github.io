var webpack = require('webpack');
var path = require("path");
module.exports = {
  entry:{
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      "./src/index.js"
    ]
  },
  output: {
      path: path.resolve(__dirname, "build"),
      publicPath: '/build/', // 这个用来成成比如图片的 URL
      filename: "app.bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['react-hot','babel']},
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
    ]
  },
  resolve:{
    react:'/node_modules/react/react.js',
  }
};
