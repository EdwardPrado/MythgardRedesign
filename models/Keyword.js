const mongoose = require("mongoose");

const KeywordsSchema = mongoose.Schema({});

module.exports = mongoose.model("Keywords", KeywordsSchema);
