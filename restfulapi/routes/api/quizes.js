const express = require("express");
let router = express.Router();
const validateQuiz = require("../../middlewares/validateQuiz");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var {Quiz,validate, validate} = require("../../models/quiz");

//get all quizes
router.get("/", auth,async(req,res)=>{
let quizes = await Quiz.find();
return res.send(quizes);

});

//get single quiz
router.get("/:id", auth,async(req,res)=>{
   
try {
    let quiz = await Quiz.findById(req.params.id);
    if (!quiz)
        return res.status(400).send("Product With given ID is not present"); //when id is not present id db
        return res.send(quiz); //everything is ok
    } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
    }

});

//update quiz
router.put("/:id",auth,async (req, res) => {
    let quiz = await Quiz.findById(req.params.id);

    quiz.coursecode = req.body.coursecode;
    quiz.coursename = req.body.coursename;
    quiz.section = req.body.section;
    quiz.quiznumber = req.body.quiznumber;
    quiz.syllabus = req.body.syllabus;
    quiz.date = req.body.date;

    await quiz.save();
    return res.send(quiz);
  });

//DELETE quiz
router.delete("/:id",auth,async (req, res) => {
    let quiz = await Quiz.findByIdAndDelete(req.params.id);
    return res.send(quiz);
  });

//Insert quiz record
router.post("/", auth,validateQuiz , async (req, res) => {
    let quiz = new Quiz();

    quiz.coursecode = req.body.coursecode;
    quiz.coursename = req.body.coursename;
    quiz.section = req.body.section;
    quiz.quiznumber = req.body.quiznumber;
    quiz.syllabus = req.body.syllabus;
    quiz.date = req.body.date;

    await quiz.save();
    return res.send(quiz);
  });

module.exports = router;