const webpack = require("@nativescript/webpack");
module.exports = (env) => {
  webpack.init(env);
  webpack.chainWebpack((config) => {
    config.resolve.set("fallback", {url:false});
    config.devServer.hotOnly(true);
    config.devServer.hot(true);
  });
  return webpack.resolveConfig();
};