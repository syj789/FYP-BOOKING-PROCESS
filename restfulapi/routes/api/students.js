const express = require("express");
let router = express.Router();
const validateStudent = require("../../middlewares/validateStudent");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
const std_auth = require("../../middlewares/std_auth");
var {Student,validate, validate} = require("../../models/student");

//get all student data
router.get("/", async(req,res)=>{
let students = await Student.find();
return res.send(students);

});

//get single student data
router.get("/:id", async(req,res)=>{
   
try {
    let student = await Student.findById(req.params.id);
    if (!student)
        return res.status(400).send("Product With given ID is not present"); //when id is not present id db
        return res.send(student); //everything is ok
    } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
    }

});

//update a student's data
//only student can update data
router.put("/:id",auth,std_auth,async (req, res) => {
    let student = await Student.findById(req.params.id);
    student.name = req.body.name;
    student.contactnumber = req.body.contactnumber;
    student.email = req.body.email;
    student.password = req.body.email;
    await student.save();
    
    return res.send(student);
  });

//DELETE a student's data
//only admin can delete data
router.delete("/:id",auth,admin,async (req, res) => {
    let student = await Student.findByIdAndDelete(req.params.id);
    return res.send(student);
  });

//Insert student data
//Anyone can insert data[for signup]
router.post("/", validateStudent , async (req, res) => {
    let student = new Student();

    student.name = req.body.name;
    student.regid = req.body.regid;
    student.contactnumber = req.body.contactnumber;
    student.email = req.body.email;
    student.password = req.body.password;

    await student.save();
    return res.send(student);
  });

module.exports = router;