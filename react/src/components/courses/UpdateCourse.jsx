import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import courseService from "../../services/CoursesService";


const useStyles = makeStyles((theme) => ({
  fields: {
    
    right: theme.spacing(-10),
  },
  updBtn:{
    marginTop: 30,
    right: theme.spacing(-10)

  }
}));


const UpdateCourse = (props) => {
  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [instructor, setInstructor] = React.useState("");
  const [section, setSection] = React.useState("");
  const style = useStyles();

  //fetch id 
  const id = props.match.params.id;
  //
  React.useEffect(() => {
    courseService.getSingleCourse(id).then((data) => {
      setName(data.name);
      setCode(data.code);
      setInstructor(data.instructor);
      setSection(data.section);
    });
  }, []);


  return (
    <Grid container spacing={3}>
{/* UPDATE COURSE HEADING*/}
      <Grid item xs={12}> <h1>Update Service</h1> </Grid>

{/*TEXT FIELD : NAME*/}
      <TextField label="Service Name" fullWidth className={style.fields} 
       value={name}
       onChange={(e) => {
         setName(e.target.value);
       }}
      
      />

{/*TEXT FIELD : COURSE-CODE*/}
      <TextField label="Service Code" fullWidth className={style.fields}
       value={code}
       onChange={(e) => {
         setCode(e.target.value);
       }}
      
      />

{/*TEXT FIELD : INSTRUCTOR-NAME*/}
      <TextField label="Description" fullWidth className={style.fields}
       value={instructor}
       onChange={(e) => {
         setInstructor(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : SECTION*/}
      <TextField label="Price" fullWidth className={style.fields}
       value={section}
       onChange={(e) => {
         setSection(e.target.value);
       }}
      
      />
 {/*BUTTON : UPDATE COURSE*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.updBtn}
      onClick={(e) => {
          
            courseService
            .updateCourse(id,{name,code,instructor,section})
            .then((data)=>{
              console.log(data);
              props.history.push("/courses");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Update Service
      </Button>
     </Grid>
  );
};

export default UpdateCourse;