var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var quizSchema = mongoose.Schema({
  coursecode: String,
  section: String,
  coursename: String,
  quiznumber: Number,
  syllabus:String,
  date:String,

});

function validateQuiz(data) {
  const schema = Joi.object({
    coursecode: Joi.string().min(2).required(),
    coursename: Joi.string().min(2).required(),
    section: Joi.string().min(6).required(),
    quiznumber: Joi.number().required(),
    syllabus: Joi.string().required(),
    date: Joi.string().required(),
  });
  return schema.validate(data, { abortEarly: false });
}

var Quiz = mongoose.model("Quiz", quizSchema);

module.exports.Quiz = Quiz;
module.exports.validate = validateQuiz;