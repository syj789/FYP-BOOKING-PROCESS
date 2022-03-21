import React from 'react';
import { Button } from "@material-ui/core";
import quizService from "../../services/QuizesService";
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

const SingleQuiz = (props) => {
  const{quiz,onDelete,history} = props;
  console.log(props);
  const style = useStyles();


    return (
    <div>
       <br />
      <div>
    <h2 className={style.mainh}>{quiz.coursename}
    
        {userService.isCR() && (
         <div style={{marginLeft:"1150px"}}>
        <Button
         variant="contained" 
         className={style.Btn}
         style={{backgroundColor:"#88e916"}}
         onClick={(e) => {
          console.log("navigate to update");
          history.push("/quizes/update/" + quiz._id);

        }}
         >
          Edit
         </Button>
        <Button variant="contained" color="secondary" className={style.Btn}
        onClick={(e) => {
          quizService
            .deleteQuiz(quiz._id)
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
        <p className={style.genh}>{quiz.coursecode} | {quiz.quiznumber} | {quiz.syllabus} | {quiz.date}</p>
       <hr />
    </div>

  );
}
 
export default withRouter(SingleQuiz);
