const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
	isFeatured: Boolean,
	date: String,
	name: String,
	article: String,
	summary: String,
	background: String,
	articleId: String,
});

module.exports = mongoose.model("News", NewsSchema);
