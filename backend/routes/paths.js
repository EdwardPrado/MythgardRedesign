const express = require("express");
const router = express.Router();
const Path = require("../models/Path");

//Return all paths
router.get("/", async function (req, res) {
	try {
		var paths = await Path.find();
		res.json(paths);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
