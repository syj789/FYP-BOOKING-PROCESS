var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var courseSchema = mongoose.Schema({
  name: String,
  code: String,
  instructor: String,
  section: String,

});

function validateCourse(data) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    code: Joi.string().min(1).required(),
    instructor: Joi.string().min(2).required(),
    section: Joi.string().min(1).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

var Course = mongoose.model("Course", courseSchema);
module.exports.Course = Course;
module.exports.validate = validateCourse;