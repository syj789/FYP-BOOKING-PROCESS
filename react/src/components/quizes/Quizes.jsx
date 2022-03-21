import React from "react";
import SingleQuiz from "../quizes/SingleQuiz";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import quizService from "../../services/QuizesService";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    top: theme.spacing(11),
    right: theme.spacing(2),
  },

  course:{
     fontFamily: "timesnewroman",
     fontSize:9,
  }
}));



const Quizes = (props) => {

  const[quizes,setQuizes] = React.useState([]);
  const style = useStyles();

  const getData = () => {
    quizService
      .getQuiz()
      .then((data) => {
        setQuizes(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get data
  React.useEffect(getData,[]);
  //console.log("Inside Quizes Components");

  //NEW QUIZ HANDLER
  const handleNewQuizClick = () => {
    console.log(props);
    props.history.push("/quizes/new");
  };
  

return (

<div>  
{((userService.isStudent()) || (userService.isCR() ) ) &&( 
  
  <div>
      <h1>Quizes</h1> 
      
{/*SHOW ADD BUTTON only to logged in user who is CR */}
<>
      { userService.isCR() &&  ( 
      
      <Fab color="primary" aria-label="add" className={style.addBtn}   
      onClick={handleNewQuizClick}>
        Add Quiz
      </Fab>
      )}
</>

<> 
  {quizes.length === 0 ? (<p>There are no Quizes</p>) 
        :
        (
            <Grid container spacing={3}>
              {quizes.map((quiz,index) => 
                  (
                      <SingleQuiz key={index} quiz = {quiz} onDelete={getData} />
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

export default Quizes;
