const express = require("express");
let router = express.Router();
const validateAssignment = require("../../middlewares/validateAssignment");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var {Assignment,validate, validate} = require("../../models/assignment");

//get all assignments
router.get("/", auth,async(req,res)=>{
let assignments = await Assignment.find();
return res.send(assignments);

});

//get single assignment
router.get("/:id", auth,async(req,res)=>{
   
try {
    let assignment = await Assignment.findById(req.params.id);
    if (!assignment)
        return res.status(400).send("Assignment With given ID is not present"); //when id is not present id db
        return res.send(assignment); //everything is ok
    } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
    }

});

//update a assignment
router.put("/:id",auth,async (req, res) => {
    let assignment = await Assignment.findById(req.params.id);
    assignment.coursename = req.body.coursename;
    assignment.coursecode = req.body.coursecode;
    assignment.assignmentnumber = req.body.assignmentnumber;
    assignment.section = req.body.section;
    assignment.syllabus = req.body.syllabus;
    assignment.date = req.body.date;
    await assignment.save();
    return res.send(assignment);
  });

//DELETE A Assignment
router.delete("/:id",auth,async (req, res) => {
    let assignment = await Assignment.findByIdAndDelete(req.params.id);

    return res.send(assignment);
  });

//Insert a ASSIGNMENT RECORD
router.post("/",validateAssignment ,auth, async (req, res) => {
    let assignment = new Assignment();

    
    assignment.coursecode = req.body.coursecode;
    assignment.coursename = req.body.coursename;
    assignment.assignmentnumber = req.body.assignmentnumber;
    assignment.section = req.body.section;
    assignment.syllabus = req.body.syllabus;
    assignment.date = req.body.date;

    await assignment.save();
    return res.send(assignment);
  });

module.exports = router;