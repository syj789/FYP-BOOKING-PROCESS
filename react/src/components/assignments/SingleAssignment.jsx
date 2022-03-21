import React from 'react';
import { Button } from "@material-ui/core";
import assignmentService from "../../services/AssignmentsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
Btn:{
  float: 'right',
},
mainh:{
fontFamily:"timesnewroman",
fontSize:"20px",
fontWeight:"bold",
marginTop:"50px",
marginLeft:"30px"
},

genh:{
  fontFamily:"calibri",
  fontSize:"17px",
  marginLeft:"80px"
  }
}));

const SingleAssignment = (props) => {
  const{assignment,onDelete,history} = props;
  console.log(props);
  const style = useStyles();
    return (

    <div>
      <br />
      <div>
    <h2 className={style.mainh}>{assignment.coursename}

        {userService.isCR() && (
       <div style={{marginLeft:"1150px"}}>
        <Button
         variant="contained" color="primary"
         className={style.Btn}
         style={{backgroundColor:"#88e916"}}
         onClick={(e) => {
          console.log("navigate to update");
          history.push("/assignments/update/" + assignment._id);

        }}
         >
          Edit
         </Button>
        <Button variant="contained" color="secondary" className={style.Btn}
        onClick={(e) => {
          assignmentService
            .deleteAssignment(assignment._id)
            .then((data) => {
              console.log(data);
              onDelete();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
         >
        Delete 
        </Button>
        </div>
       

         )}
    </h2>
    <hr />
   </div>
          <p className={style.genh}>{assignment.coursecode} | {assignment.assignmentnumber} | {assignment.syllabus} | {assignment.date}</p>
          <hr />
</div>

  );
}
 
export default withRouter(SingleAssignment);
