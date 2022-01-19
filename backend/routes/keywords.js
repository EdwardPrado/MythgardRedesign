const express = require("express");
const router = express.Router();
const Keyword = require("../models/Keyword");

//TODO:  Setup endpoints and db

//Return all keywords
// router.get("/", async function (req, res) {
// 	try {
// 		var keywords = await Keyword.find();
// 		res.json(keywords);
// 	} catch (err) {
// 		res.json({ message: err });
// 	}
// });

module.exports = router;
