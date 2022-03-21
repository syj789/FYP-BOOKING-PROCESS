import React from 'react';
import { Button } from "@material-ui/core";
import courseService from "./../../services/CoursesService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
Btn:{
  float: 'right'
},
mainh:{
fontFamily:"timesnewroman",
fontSize:"20px",
fontWeight:"bold",
marginTop:"50px"
},

genh:{
  fontFamily:"calibri",
  fontSize:"17px",
  }
}));



const SingleCourse = (props) => {
  const{course,onDelete,history} = props;
  console.log(props);
  const style = useStyles();

  const handleNewAssignmentClick = () => {
    console.log(props);
    props.history.push("/assignments/new");
  };

    return (
    <div>
      <br></br>
        <h2 className={style.mainh}>{course.name} 
        
        {userService.isStudent() && (
    <>

        <Button variant="contained" color="secondary" className={style.Btn}
        onClick={handleNewAssignmentClick}>
      
          Book 
        </Button>
    </>
         )}

        {userService.isAdmin() && (
    <>

        <Button
         variant="contained" color="primary"
         className={style.Btn}
         style={{backgroundColor:"#88e916"}}
         onClick={(e) => {
          console.log("navigate to update");
          history.push("/courses/update/" + course._id);

        }}
         >
          Edit
         </Button>
        <Button variant="contained" color="secondary" className={style.Btn}
        onClick={(e) => {
          courseService
            .deleteCourse(course._id)
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
    </>
         )}
        </h2>
        <hr />
        <p className={style.genh}>{course.section}  |  {course.code}  |  {course.instructor}</p>
        
      
    </div>

  );
}
 
export default withRouter(SingleCourse);
