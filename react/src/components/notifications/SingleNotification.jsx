import React from 'react';
import { Button,Grid ,Typography} from "@material-ui/core";
import notificationService from "../../services/NotificationsService";
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
    fontFamily:"timesnewroman",
    fontSize:"15px",
    },

genhlink:{
      fontFamily:"timesnewroman",
      fontSize:"15px",
      color:"blue"
      }
  }));

const SingleNotification = (props) => {
  const{notification,onDelete,history} = props;
  console.log(props);
  const style = useStyles();
    return (
<Grid item xs zeroMinWidth>
  <Typography style={{padding:"30px"}}>
    <div>
      <br />
        <h2 className={style.mainh}>
        
          {notification.title} 
        {userService.isAdmin() && (
        <>
        <Button
         variant="contained" color="primary"
         className={style.Btn}
         style={{backgroundColor:"#88e916",float:"right"}}
         onClick={(e) => {
          console.log("navigate to update");
          history.push("/notifications/update/" + notification._id);

        }}
         >
          Edit
         </Button>
        <Button variant="contained" color="secondary" className={style.Btn}
        onClick={(e) => {
          notificationService
            .deleteNotification(notification._id)
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
        <hr />
        </>
         )}
        </h2>
        <h4 className={style.genh}>{notification.body}</h4>
        <h4 className={style.genh}>{notification.date}</h4>
        <h4 className={style.genhlink}>{notification.links}</h4>
        <br />
    </div>
    </Typography>
    </Grid>

  );
}
 
export default withRouter(SingleNotification);
