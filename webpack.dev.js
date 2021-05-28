const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "docs"),
		assetModuleFilename: "assets/[name][ext]",
	},
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
			},
		],
	},
});
