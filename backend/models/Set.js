const mongoose = require("mongoose");

const SetSchema = mongoose.Schema({
	sets: Array,
});

module.exports = mongoose.model("Sets", SetSchema);
