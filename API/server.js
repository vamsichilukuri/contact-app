const express = require("express");
const cors = require("cors");
const { db } = require("./connection/database");
global.db = db;

// app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//router
require("./routes")(app);

// server
const port = 3002;
app.listen(port, () => {
	console.log(`app is listening on http://localhost:${port}`);
});
