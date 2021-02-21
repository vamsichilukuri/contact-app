const ContactSchema = require("../models/Contact.model");

const GetAllContacts = async (req, res) => {
	try {
		const contacts = await ContactSchema.find({});
		// res.json({
		// 	success: true,
		// 	message: "All contact's",
		// 	data: contacts,
		// });
		res.send(contacts);
	} catch (e) {
		return res.json({
			success: false,
			message: e && e.message ? e.message : "Something Went Wrong.",
		});
	}
};

const CreateContact = async (req, res) => {
	try {
		const { name, mobile } = req.body;
		const contact = await ContactSchema.create({ name, mobile });
		res.json({
			success: true,
			message: "Contact added successfully",
			data: contact,
		});
	} catch (e) {
		return res.json({
			success: false,
			message: e && e.message ? e.message : "Something Went Wrong.",
		});
	}
};

const DeleteContact = async (req, res) => {
	try {
		const { id } = req.params;
		await ContactSchema.findOneAndRemove({ _id: id });
		res.json({
			success: true,
			message: "Contact removed successfully",
		});
	} catch (e) {
		return res.json({
			success: false,
			message: e && e.message ? e.message : "Something Went Wrong.",
		});
	}
};

module.exports = { GetAllContacts, CreateContact, DeleteContact };
