const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		common: "./common.js",
		home: "./index.js",
	},
	target: "web",
	devServer: {
		hot: true,
	},
	module: {
		rules: [
			{ test: /\.html$/, use: ["html-loader"] },
			{ test: /\.(jpe?g|gif|svg|png|ico)$/, type: "asset/resources" },
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./index.html",
			chunks: ["common", "home"],
			filename: "index.html",
		}),
	],
};
