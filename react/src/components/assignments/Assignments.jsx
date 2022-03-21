import React from "react";
import SingleAssignment from "../assignments/SingleAssignment";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import assignmentService from "../../services/AssignmentsService";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    top: theme.spacing(11),
    right: theme.spacing(2),
    marginTop:"100px",
  },
  course:{
     fontFamily: "timesnewroman",
     fontSize:9,
  }
}));



const Assignments = (props) => {

  const[assignments,setAssignments] = React.useState([]);
  const style = useStyles();

  const getData = () => {
    assignmentService
      .getAssignment()
      .then((data) => {
        setAssignments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get data
  React.useEffect(getData,[]);
  //console.log("Inside Assignments Components");

  //NEW assignment HANDLER
  const handleNewAssignmentClick = () => {
    console.log(props);
    props.history.push("/assignments/new");
  };
  

return (

<div>  
{(userService.isStudent() || userService.isCR()  ) && ( 
  
  <div>
      <h1>Assignments</h1> 
      
{/*SHOW ADD BUTTON only to logged in user who is CR */}
<>
      {(userService.isStudent() || userService.isCR() ) &&  ( 
      
      <Fab color="primary" aria-label="add" className={style.addBtn}   
      onClick={handleNewAssignmentClick}>
        Add
      </Fab>
      )}
</>

<> 
  {assignments.length === 0 ? (<p>There are no Assignments</p>) 
        :
        (
            <Grid container spacing={3}>
              {assignments.map((assignment,index) => 
                  (
                      <SingleAssignment key={index} assignment = {assignment} onDelete={getData} />
                  )
              )}
            </Grid>
        )
  }
</>
  
</div>  
  )}
 </div>

  
  
);
};

export default Assignments;
