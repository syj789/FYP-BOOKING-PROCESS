import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import courseService from "../../services/CoursesService";


const useStyles = makeStyles((theme) => ({
  fields: {
    
    right: theme.spacing(-10),
  },
  addBtn:{
    marginTop: 30,
    right: theme.spacing(-10)

  },
  mainh:{
    fontFamily:"timesnewroman",
    fontSize:"30px",
    marginLeft:"82px",
    marginTop:"50px",
    marginBottom:"20px"
  }

}));


const NewCourse = (props) => {
  const [name, setName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [instructor, setInstructor] = React.useState("");
  const [section, setSection] = React.useState("");
  const style = useStyles();


  return (
    <Grid container spacing={3}>
{/* ADD NEW COURSE HEADING*/}
   <h1 className={style.mainh}>Add New Service <hr /></h1>
  

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
 {/*BUTTON : ADD COURSE*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.addBtn}
      onClick={(e) => {
          
            courseService.addCourse
            ({name,code,instructor,section})
            .then((data)=>{
              console.log(data);
              props.history.push("/courses");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Add New Service
      </Button>
     </Grid>
  );
};

export default NewCourse;