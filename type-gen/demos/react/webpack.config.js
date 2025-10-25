const webpack = require("@nativescript/webpack");
module.exports = (env) => {
  webpack.init(env);
  webpack.useConfig("react");
  return webpack.resolveConfig();
};