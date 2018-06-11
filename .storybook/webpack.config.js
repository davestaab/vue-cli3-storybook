const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (baseConfig, env, defaultConfig) => {
  //   updateWebpackConfig(defaultConfig);
  defaultConfig.plugins.push(new VueLoaderPlugin());

  defaultConfig.resolve.extensions.push("vue$", ".vue/dist/vue.esm.js");
  defaultConfig.resolve.extensions = ['.js', '.json', '.vue', '.jsx'];

  return defaultConfig;
};
