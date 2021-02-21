const {
	GetAllContacts,
	CreateContact,
	DeleteContact,
} = require("../controller/contact.controller");

module.exports = (app) => {
	app.get("/users", GetAllContacts);
	app.post("/users", CreateContact);
	app.delete("/users/:id", DeleteContact);
};
