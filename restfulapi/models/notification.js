var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var notificationSchema = mongoose.Schema({
  title: String,
   body: String,
   date: String,
  links: String,

});

function validateNotification(data) {
  const schema = Joi.object({
     title: Joi.string().min(2).required(),
     body: Joi.string().min(6).required(),
     date: Joi.string().min(2).required(),
     links: Joi.string(),
  });
  return schema.validate(data, { abortEarly: false });
}

var Notification = mongoose.model("Notification", notificationSchema);
module.exports.Notification = Notification;
module.exports.validate = validateNotification;