const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

//Return all cards
router.get("/", async function (req, res) {
	//Access query parameters
	var searchQueries = req.query;

	// console.log("Faction Query: ", req.query.faction);
	if (req.query.faction === "All") {
		delete searchQueries.faction;
	}

	//A value is automatically set for the page limit if the request does not supply a pageLimit or if it exceeds the maximum allowed
	var pageLimit = 32;
	if (!isNaN(req.query.pageLimit) & (req.query.pageLimit < 64) & (req.query.pageLimit > 0)) {
		pageLimit = req.query.pageLimit;
	}

	var pageNumber = 1;
	if (!isNaN(req.query.pageNumber)) {
		if (req.query.pageNumber > 0) {
			pageNumber = req.query.pageNumber;
		} else {
			pageNumber = req.query.pageNumber + 1;
		}
	}

	/*
	TODO:  Add support for the following values:
	cost:asc
	cost:dsc
	attack:asc
	attack:dsc
	health:asc
	health:dsc
	name:asc
	name:dsc

	Default sort by name:asc 
	*/
	var sort;

	try {
		var cards = await Card.find({ ...searchQueries }, { _id: 0 })
			.skip((pageNumber - 1) * pageLimit)
			.limit(pageLimit);

		res.json(cards);
	} catch (err) {
		res.json({ message: err });
	}
});

//Return card JSON by cardCode
router.get("/:code", async function (req, res) {
	try {
		var dataEntry = await Card.findOne({ cardCode: req.params.code });
		res.json(dataEntry);
	} catch (err) {
		res.json({ message: err });
	}
});

//Return random card JSON
router.get("/random", async function (req, res) {
	try {
		// var dataEntry = await Card.findOne({ cardCode: req.params.code });
		res.json(dataEntry);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
