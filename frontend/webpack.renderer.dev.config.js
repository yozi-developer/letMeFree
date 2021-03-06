const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const spawn = require("child_process").spawn;

const baseConfig = require("./webpack.renderer.config");

module.exports = merge.smart(baseConfig, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "src", "main.ts")],
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              plugins: ["react-hot-loader/babel"]
            }
          },
          "ts-loader" // (or awesome-typescript-loader)
        ]
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          { loader: "style-loader", options: { sourceMap: true } },
          {
            loader: "css-loader",
            options: {  modules: true, importLoaders: 1, sourceMap: true }
          },
          { loader: "postcss-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 2003,
    compress: true,
    noInfo: true,
    stats: "errors-only",
    inline: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false
    },
    before() {
      if (process.env.START_HOT) {
        console.log("Starting main process");
        spawn("npm", ["run", "start-main-dev"], {
          shell: true,
          env: process.env,
          stdio: "inherit"
        })
          .on("close", code => process.exit(code))
          .on("error", spawnError => console.error(spawnError));
      }
    }
  }
});
