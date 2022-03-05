const express = require("express");
const router = express.Router();
const Power = require("../models/Power");

//Return all powers
router.get("/", async function (req, res) {
	try {
		var powers = await Power.find();
		res.json(powers);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
