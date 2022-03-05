const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
	cardCode: String,
	name: String,
	assets: Array,
	faction: String,
	cost: Number,
	costBreakdown: Object,
	attack: Number,
	health: Number,
	flavorText: String,
	keywords: Array,
	rarity: String,
	subtypeRef: Array,
	type: String,
	collectible: Boolean,
	associatedCards: Array,
	associatedCardRefs: Array,
	set: String,
	setRef: String,
});

module.exports = mongoose.model("Cards", CardSchema);
