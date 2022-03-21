import React from "react";
import SingleCourse from "./SingleCourse";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import courseService from "./../../services/CoursesService";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    top: theme.spacing(11),
    right: theme.spacing(2),
    marginTop:"130px",
    padding:"43px",
  
  },

  coursestyling:{
     marginTop:"50px"
  },

  coursehd:{
    marginTop:"40px",
    fontFamily:"timesnewroman",
    fontSize:"40px",

 }
}));



const Courses = (props) => {

  const[courses,setCourses] = React.useState([]);
  const style = useStyles();

  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState("10");
  const getData = () => {
    courseService
      .getCourse(page, perPage)
      .then((data) => {
        setCourses(data.courses);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get data
  React.useEffect(getData, [page, perPage]);
  //console.log("Inside Courses Components");

  //NEW COURSE HANDLER
  const handleNewCourseClick = () => {
    console.log(props);
    props.history.push("/courses/new");
  };


return (

    <div>
      <h1 className={style.coursehd}>Services</h1> 
      <hr />
<div >
  <span style={{fontFamily:"timesnewroman",fontSize:"16px"}}> Records Per Page:{" "}</span>
      <select
        
        onChange={(e) => setPerPage(e.target.value)}
        style={{ width: "130px", height: "25px",backgroundColor:"#f8e9f5" }}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="6">6</option>
      </select>
      <hr />

</div>     

{/*SHOW ADD BUTTON only to logged in user who is Admin */}
<>
      {(userService.isLoggedIn() && userService.isAdmin() ) &&  ( 
      <Fab color="primary" aria-label="add" className={style.addBtn}   
      onClick={handleNewCourseClick}>
        Add Courses
      </Fab>
      )}
</>

<> 
  {courses.length === 0 ? (<p>There are no services</p>) 
        :
        (
            <div className={style.coursestyling}>
              {courses.map((course,index) => 
                  (
                      <SingleCourse key={index} course = {course} onDelete={getData} />
                  )
              )}
           </div>
        )
  }
</>
<Grid item xs={12}  style={{marginTop:"130px",marginBottom:"50px",marginLeft:"40%"}}>
        <Pagination
          
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          color="secondary"
          onChange={(e, value) => {
            console.log(value);
            props.history.push("/courses/" + value);
          }}
        />{" "}
        <div style={{marginLeft:"-23px",fontFamily:"timesnewroman",fontSize:"15px",fontWeight:"bold"}}>
        Total: {total} ...... Showing {(page - 1) * perPage} to{" "}
        {(page - 1) * perPage + courses.length}
        </div>
      </Grid>
</div>   
  
);
};

export default Courses;
