module.exports = {
  mode: "development",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("/public"),
    filename: "assets/js/bundle.js",
  },
  devServer: {
    host: "0.0.0.0",
    port: 9090,
    liveReload: true,
    compress: true,
    hot: false,
  },
};

// 메모리 상으로 bundle js
