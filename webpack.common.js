const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		common: "./pages/common/common.js",
		home: "./pages/home/index.js",
		research: "./pages/research/research.js",
		teaching: "./pages/teaching/teaching.js",
		tutoring: "./pages/tutoring/tutoring.js",
		ch: "./pages/common/ch.js",
	},
	target: "web",
	devServer: {
		hot: true,
	},
	module: {
		rules: [
			{ test: /\.html$/, use: ["html-loader"] },
			{ test: /\.(jpe?g|gif|svg|png|ico|pdf|rar)$/, type: "asset/resource" },
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./pages/home/index.html",
			chunks: ["common", "home"],
			filename: "index.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/home/index-ch.html",
			chunks: ["common", "home", "ch"],
			filename: "index-ch.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/research/research.html",
			chunks: ["common", "research"],
			filename: "research.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/research/research-ch.html",
			chunks: ["common", "research", "ch"],
			filename: "research-ch.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/teaching/teaching.html",
			chunks: ["common", "teaching"],
			filename: "teaching.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/teaching/teaching-ch.html",
			chunks: ["common", "teaching", "ch"],
			filename: "teaching-ch.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/tutoring/tutoring.html",
			chunks: ["common", "tutoring"],
			filename: "tutoring.html",
		}),
		new HTMLWebpackPlugin({
			template: "./pages/tutoring/tutoring-ch.html",
			chunks: ["common", "tutoring", "ch"],
			filename: "tutoring-ch.html",
		}),
	],
};
