const mongoose = require("mongoose");

const PowerSchema = mongoose.Schema({
	powerId: String,
	name: String,
	cost: Number,
	description: String,
	flavorText: String,
	assetss: Array,
});

module.exports = mongoose.model("Power", PowerSchema);
