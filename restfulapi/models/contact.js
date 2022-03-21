var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var contactSchema = mongoose.Schema({
  name: String,
  regid: String,
  contactnum: Number,
  section: String,
  //deparment
  dep: {
    type: String,
    default: "computerscience",
  },

});

function validateContact(data) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    regid: Joi.string().min(6).required(),
    contactnum: Joi.number().min(2).required(),
    section: Joi.string().min(1).required(),
    //department
    dep: Joi.string(),
  });
  return schema.validate(data, { abortEarly: false });
}

var Contact = mongoose.model("Contact", contactSchema);
module.exports.Contact = Contact;
module.exports.validate = validateContact;