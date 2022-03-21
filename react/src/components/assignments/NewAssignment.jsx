import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import assignmentService from "../../services/AssignmentsService";


const useStyles = makeStyles((theme) => ({
  fields: {  right: theme.spacing(-10),},
  addBtn:{
    marginTop: 30,
    right: theme.spacing(-10)
  }
}));


const NewAssignment = (props) => {
  
  const [coursename, setCoursename] = React.useState("");
  const [coursecode, setCoursecode] = React.useState("");
  const [section, setSection] = React.useState("");
  const [assignmentnumber, setAssignmentnumber] = React.useState("");
  const [date, setDate] = React.useState("");
  const [syllabus, setSyllabus] = React.useState("");
  
  const style = useStyles();


  return (
    <Grid container spacing={3}>
{/* ADD NEW Assignment HEADING*/}
      <Grid item xs={12}> <h1>Booking Details</h1> </Grid>

{/*TEXT FIELD : COURSE-CODE*/}
      <TextField label="Full Name" fullWidth className={style.fields}
       value={coursecode}
       onChange={(e) => {
         setCoursecode(e.target.value);
       }}
      
      />

{/*TEXT FIELD : COURSE-NAME*/}
<TextField label="Email Id" fullWidth className={style.fields}
       value={coursename}
       onChange={(e) => {
         setCoursename(e.target.value);
       }}
      
      />


 {/*TEXT FIELD : SECTION*/}
      <TextField label="Contact Information" fullWidth className={style.fields}
       value={section}
       onChange={(e) => {
         setSection(e.target.value);
       }}
      
      />
    
 {/*TEXT FIELD : QUIZ NUMBER*/}
 <TextField label="Requested Date" fullWidth className={style.fields}
       value={assignmentnumber}
       onChange={(e) => {
         setAssignmentnumber(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : SYLLABUS*/}
 <TextField label="Requested Time" fullWidth className={style.fields}
       value={syllabus}
       onChange={(e) => {
         setSyllabus(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : Date*/}
 <TextField label="Number of Clients" fullWidth className={style.fields}
       value={date}
       onChange={(e) => {
         setDate(e.target.value);
       }}
      
      />

 {/*BUTTON : ADD Assignment*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.addBtn}
      onClick={(e) => {
          
            assignmentService.addAssignment
            ({coursecode,coursename,section,assignmentnumber,syllabus,date})
            .then((data)=>{
              console.log(data);
              props.history.push("/assignments");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Send Booking Request
      </Button>
     </Grid>
  );
};

export default NewAssignment;