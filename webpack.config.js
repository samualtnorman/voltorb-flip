const { resolve } = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
// const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { ProgressPlugin } = require("webpack")

module.exports = {
	entry: "./src/index.ts",
	// devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: "/node_modules/"
			},
			{
				test: /\.(png|mp3)$/,
				use: [ "file-loader" ],
			},
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader" ]
			}
		]
	},
	resolve: {
		extensions: [ ".tsx", ".ts", ".js" ]
	},
	output: {
		filename: "main.js",
		path: resolve(__dirname, "dist")
	},
	plugins: [
		new ProgressPlugin,
		// new CleanWebpackPlugin,
		new HTMLWebpackPlugin({ title: "Voltorb Flip" })
	]
}
