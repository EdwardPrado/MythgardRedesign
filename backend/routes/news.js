const express = require("express");
const router = express.Router();
const News = require("../models/News");

router.get("/posts/", async function (req, res) {
	try {
		//Access query parameters
		var searchQueries = req.query;

		if (req.query.articleId === undefined) {
			try {
				var news = await News.find({ ...searchQueries }, { _id: 0, article: 0 });
				res.json(news);
			} catch (err) {
				res.json({ message: err });
			}
		} else {
			try {
				var news = await News.find({ ...searchQueries }, { _id: 0 });
				res.json(news);
			} catch (err) {
				res.json({ message: err });
			}
		}
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
