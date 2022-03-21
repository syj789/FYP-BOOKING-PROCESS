const express = require("express");
let router = express.Router();
const validateContact = require("../../middlewares/validateContact");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var {Contact,validate, validate} = require("../../models/contact");

//get all contacts
router.get("/", auth,async(req,res)=>{
let contacts = await Contact.find();
return res.send(contacts);

});

//get single contact
router.get("/:id", auth,async(req,res)=>{
   
try {
    let contact = await Contact.findById(req.params.id);
    if (!contact)
        return res.status(400).send("Product With given ID is not present"); //when id is not present id db
        return res.send(contact); //everything is ok
    } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
    }

});

//update a contact
router.put("/:id",auth,admin,async (req, res) => {
    let contact = await Contact.findById(req.params.id);
    contact.name = req.body.name;
    contact.regid = req.body.regid;
    contact.contactnum = req.body.contactnum;
    contact.section = req.body.section;
    contact.dep = req.body.dep;
    await contact.save();
    return res.send(contact);
  });

//DELETE A COURSE
router.delete("/:id",auth,admin,async (req, res) => {
    let contact = await Contact.findByIdAndDelete(req.params.id);

    return res.send(contact);
  });

//Insert a COURSE RECORD
router.post("/",validateContact ,auth,admin, async (req, res) => {
    let contact = new Contact();

    contact.name = req.body.name;
    contact.regid = req.body.regid;
    contact.contactnum = req.body.contactnum;
    contact.section = req.body.section;
    contact.dep = req.body.dep;

    await contact.save();
    return res.send(contact);
  });

module.exports = router;