const express = require("express");
const router = express.Router();
const Set = require("../models/Set");

//Return card JSON by cardCode
router.get("/", async function (req, res) {
	try {
		var sets = await Set.find();
		res.json(sets);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
