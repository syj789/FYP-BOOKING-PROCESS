import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import assignmentService from "../../services/AssignmentsService";


const useStyles = makeStyles((theme) => ({
  fields: {
    
    right: theme.spacing(-10),
  },
  updBtn:{
    marginTop: 30,
    right: theme.spacing(-10)

  }
}));


const UpdateAssignment = (props) => {
  const [coursecode, setCoursecode] = React.useState("");
  const [coursename, setCoursename] = React.useState("");
  const [section, setSection] = React.useState("");
  const [assignmentnumber, setAssignmentnumber] = React.useState("");
  const [date, setDate] = React.useState("");
  const [syllabus, setSyllabus] = React.useState("");
  const style = useStyles();

  //fetch id 
  const id = props.match.params.id;
  //
  React.useEffect(() => {
    assignmentService.getSingleAssignment(id).then((data) => {
      setCoursename(data.coursename);
      setCoursecode(data.coursecode);
      setSyllabus(data.syllabus);
      setSection(data.section);
      setDate(data.date);
      setAssignmentnumber(data.assignmentnumber);
    });
  }, []);


  return (
    <Grid container spacing={3}>
{/* HEADING*/}
      <Grid item xs={12}> <h1>Update Assignment</h1> </Grid>

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

{/*TEXT FIELD : Assignment NUMBER*/}
<TextField label="Assignment Number" fullWidth className={style.fields}
       value={assignmentnumber}
       onChange={(e) => {
         setAssignmentnumber(e.target.value);
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
 {/*BUTTON : UPDATE Assignment*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.updBtn}
      onClick={(e) => {
          
            assignmentService
            .updateAssignment(id,{coursecode,coursename,section,assignmentnumber,syllabus,date})
            .then((data)=>{
              console.log(data);
              props.history.push("/assignments");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Update Assignment
      </Button>
     </Grid>
  );
};

export default UpdateAssignment;