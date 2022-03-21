import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import quizService from "../../services/QuizesService";


const useStyles = makeStyles((theme) => ({
  fields: {  right: theme.spacing(-10),},
  addBtn:{
    marginTop: 30,
    right: theme.spacing(-10)
  }
}));


const NewQuiz = (props) => {
  
  const [coursename, setCoursename] = React.useState("");
  const [coursecode, setCoursecode] = React.useState("");
  const [section, setSection] = React.useState("");
  const [quiznumber, setQuiznumber] = React.useState("");
  const [date, setDate] = React.useState("");
  const [syllabus, setSyllabus] = React.useState("");
  
  const style = useStyles();


  return (
    <Grid container spacing={3}>
{/* ADD NEW Quiz HEADING*/}
      <Grid item xs={12}> <h1>Add New Quiz</h1> </Grid>

{/*TEXT FIELD : COURSE-CODE*/}
      <TextField label="Course Code" fullWidth className={style.fields}
       value={coursecode}
       onChange={(e) => {
         setCoursecode(e.target.value);
       }}
      
      />

{/*TEXT FIELD : COURSE-NAME*/}
<TextField label="Course Name" fullWidth className={style.fields}
       value={coursename}
       onChange={(e) => {
         setCoursename(e.target.value);
       }}
      
      />


 {/*TEXT FIELD : SECTION*/}
      <TextField label="Section" fullWidth className={style.fields}
       value={section}
       onChange={(e) => {
         setSection(e.target.value);
       }}
      
      />
    
 {/*TEXT FIELD : QUIZ NUMBER*/}
 <TextField label="Quiz-Number " fullWidth className={style.fields}
       value={quiznumber}
       onChange={(e) => {
         setQuiznumber(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : SYLLABUS*/}
 <TextField label="Syllabus" fullWidth className={style.fields}
       value={syllabus}
       onChange={(e) => {
         setSyllabus(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : Date*/}
 <TextField label="Date " fullWidth className={style.fields}
       value={date}
       onChange={(e) => {
         setDate(e.target.value);
       }}
      
      />

 {/*BUTTON : ADD Quiz*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.addBtn}
      onClick={(e) => {
          
            quizService.addQuiz
            ({coursecode,coursename,section,quiznumber,date,syllabus})
            .then((data)=>{
              console.log(data);
              props.history.push("/quizes");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Add New Quiz
      </Button>
     </Grid>
  );
};

export default NewQuiz;