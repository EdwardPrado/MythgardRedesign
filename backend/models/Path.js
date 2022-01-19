const mongoose = require("mongoose");

const PathSchema = mongoose.Schema({
	pathId: String,
	name: String,
	cost: Number,
	description: String,
	assets: Array,
});

module.exports = mongoose.model("Path", PathSchema);
