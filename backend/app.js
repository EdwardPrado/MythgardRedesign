var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const createApplication = require("express/lib/express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const port = process.env.PORT || 5000;
var app = express();

app.use(express.static("public"));

//Middleware
app.use(bodyParser.json());

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
	console.log("Successfully connected to DB")
);

//Import Routes
const indexRouter = require("./routes/index");
const cardsRouter = require("./routes/cards");
const setsRouter = require("./routes/sets");
const newsRouter = require("./routes/news");

app.use("/", indexRouter);
app.use("/cards", cardsRouter);
app.use("/sets", setsRouter);
app.use("/news", newsRouter);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
