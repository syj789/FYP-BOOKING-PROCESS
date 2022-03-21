const express = require("express");
let router = express.Router();
const validateNotification = require("../../middlewares/validateNotification");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var {Notification,validate, validate} = require("../../models/notification");

//get all Notifications
router.get("/", auth,async(req,res)=>{
let notifications = await Notification.find();
return res.send(notifications);

});

//get single Notification
router.get("/:id", auth,async(req,res)=>{
   
try {
    let notification = await Notification.findById(req.params.id);
    if (!notification)
        return res.status(400).send("Notification With given ID is not present"); //when id is not present id db
        return res.send(notification); //everything is ok
    } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
    }

});

//update a Notification
router.put("/:id",auth,admin,async (req, res) => {
    let notification = await Notification.findById(req.params.id);
    notification.title = req.body.title;
    notification.body = req.body.body;
    notification.date = req.body.date;
    notification.links = req.body.links;
    await notification.save();
    return res.send(notification);
  });

//DELETE A notification
router.delete("/:id",auth,admin,async (req, res) => {
    let notification = await Notification.findByIdAndDelete(req.params.id);

    return res.send(notification);
  });

//Insert a notification RECORD
router.post("/",validateNotification ,auth,admin, async (req, res) => {
    let notification = new Notification();

    notification.title = req.body.title;
    notification.body = req.body.body;
    notification.date = req.body.date;
    notification.links = req.body.links;

    await notification.save();
    return res.send(notification);
  });

module.exports = router;