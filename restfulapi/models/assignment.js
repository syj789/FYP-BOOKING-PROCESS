var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var assignmentSchema = mongoose.Schema({
  coursecode: String,
  section: String,
  coursename: String,
  assignmentnumber: Number,
  syllabus:String,
  date:String,

});

function validateAssignment(data) {
  const schema = Joi.object({
    coursecode: Joi.string().min(1).required(),
    coursename: Joi.string().min(1).required(),
    section: Joi.string().min(1).required(),
    assignmentnumber: Joi.string().required(),
    syllabus: Joi.string().required(),
    date: Joi.string().required(),
  });
  return schema.validate(data, { abortEarly: false });
}

var Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports.Assignment = Assignment;
module.exports.validate = validateAssignment;