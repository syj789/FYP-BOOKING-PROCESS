import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import quizService from "../../services/QuizesService";


const useStyles = makeStyles((theme) => ({
  fields: {
    
    right: theme.spacing(-10),
  },
  updBtn:{
    marginTop: 30,
    right: theme.spacing(-10)

  }
}));


const UpdateQuiz = (props) => {
  const [coursecode, setCoursecode] = React.useState("");
  const [coursename, setCoursename] = React.useState("");
  const [section, setSection] = React.useState("");
  const [quiznumber, setQuiznumber] = React.useState("");
  const [date, setDate] = React.useState("");
  const [syllabus, setSyllabus] = React.useState("");
  const style = useStyles();

  //fetch id 
  const id = props.match.params.id;
  //
  React.useEffect(() => {
    quizService.getSingleQuiz(id).then((data) => {
      setCoursename(data.coursename);
      setCoursecode(data.coursecode);
      setSyllabus(data.syllabus);
      setSection(data.section);
      setDate(data.date);
      setQuiznumber(data.quiznumber);
    });
  }, []);


  return (
    <Grid container spacing={3}>
{/* HEADING*/}
      <Grid item xs={12}> <h1>Update Quiz</h1> </Grid>

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
<TextField label="Quiz Number" fullWidth className={style.fields}
       value={quiznumber}
       onChange={(e) => {
         setQuiznumber(e.target.value);
       }}
      
      />

  {/*TEXT FIELD : Syllabus*/}
  <TextField label="Syllabus" fullWidth className={style.fields}
       value={syllabus}
       onChange={(e) => {
         setSyllabus(e.target.value);
       }}
      
      />

{/*TEXT FIELD : DATE*/}
<TextField label="Date" fullWidth className={style.fields}
       value={date}
       onChange={(e) => {
         setDate(e.target.value);
       }}
      
      />
 {/*BUTTON : UPDATE QUIZ*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.updBtn}
      onClick={(e) => {
          
            quizService
            .updateQuiz(id,{coursecode,coursename,section,quiznumber,syllabus,date})
            .then((data)=>{
              console.log(data);
              props.history.push("/quizes");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Update Quiz
      </Button>
     </Grid>
  );
};

export default UpdateQuiz;