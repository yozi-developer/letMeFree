const path = require("path");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	module: {
		rules: [
      {
        test: /\.ts?$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
            }
          },
          "ts-loader"
        ]
      },
		]
	},

	plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // allow import cycles that include an asyncronous import,
      // e.g. via import(/* webpackMode: "weak" */ './file.js')
      allowAsyncCycles: false,
      // set the current working directory for displaying module paths
      cwd: process.cwd()
    })
  ],
  entry: './src/index.ts',
  externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, 'dist')
	},
  resolve: {
    extensions: ['.ts', '.json']
  },
	mode: 'development'
};
