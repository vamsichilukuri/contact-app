const mongoose = require("mongoose");
const url = "mongodb://database:27018/contacts";
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
const db = connection.on("open", () => {
	console.log("mongoDB connected..");
});

module.exports = { db };
