module.exports = {
	target: "node",
	mode: "development",
	entry: "./app.js",
	resolve: {
		modules: ["backend", "node_modules"],
	},
};
