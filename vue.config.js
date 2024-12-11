const { defineConfig } = require("@vue/cli-service");
const { RsdoctorWebpackPlugin } = require("@rsdoctor/webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new RsdoctorWebpackPlugin()],
  },
});
