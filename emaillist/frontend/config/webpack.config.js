const path = require("path");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
module.exports = function (env) {
  return {
    mode: "none",
    entry: path.resolve(`src/index.js`),
    output: {
      path: path.resolve("public"),
      filename: "assets/js/main.js",
      assetModuleFilename: "assets/images/[hash][ext]",
    },
    module: {
      rules: [
        {
          test: /\.js/i,
          exclude: /node_modules/,
          use: "babel-loader",
          options: {
            configFile: path.resolve("config/babel.config.json"),
          },
        },
        {
          test: /\.(c|sa|sc)ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [new CaseSensitivePathsPlugin()],
    devTool: "",
    devServer: {
      host: "0.0.0.0",
      port: 9090,
      liveReload: true,
      compress: true,
      hot: false,
    },
  };
};
