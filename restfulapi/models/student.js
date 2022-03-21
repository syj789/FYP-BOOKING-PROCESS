var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var studentSchema = mongoose.Schema({
  name: String,
  regid: String,
  contactnumber: Number,
  email: String,
  password:String

});

function validateStudent(data) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    regid: Joi.string().min(6).required(),
    contactnumber: Joi.number().min(1).required(),
    email: Joi.string().required(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

var Student = mongoose.model("Student", studentSchema);
module.exports.Student = Student;
module.exports.validate = validateStudent;