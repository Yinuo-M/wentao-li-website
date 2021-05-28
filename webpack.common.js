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
			{ test: /\.(jpe?g|gif|svg|png|ico)$/, type: "asset/resource" },
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./index.html",
			chunks: ["common", "home"],
			filename: "index.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/research/research.html",
			chunks: ["common"],
			filename: "research.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/teaching/teaching.html",
			chunks: ["common"],
			filename: "teaching.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/tutoring/tutoring.html",
			chunks: ["common"],
			filename: "tutoring.html",
		}),
	],
};
