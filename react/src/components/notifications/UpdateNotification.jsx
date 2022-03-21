import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import notificationService from "../../services/NotificationsService";


const useStyles = makeStyles((theme) => ({
  fields: {
    
    right: theme.spacing(-10),
  },
  updBtn:{
    marginTop: 30,
    right: theme.spacing(-10)

  }
}));


const UpdateNotification = (props) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [date, setDate] = React.useState("");
  const [links, setLink] = React.useState("");
  const style = useStyles();

  //fetch id 
  const id = props.match.params.id;
  //
  React.useEffect(() => {
    notificationService.getSingleNotification(id).then((data) => {
      setTitle(data.title);
      setBody(data.body);
      setDate(data.date);
      setLink(data.links);
    });
  }, []);


  return (
    <Grid container spacing={3}>
{/* UPDATE notification HEADING*/}
      <Grid item xs={12}> <h1>Update Course</h1> </Grid>

{/*TEXT FIELD : title*/}
      <TextField label="Title" fullWidth className={style.fields} 
       value={title}
       onChange={(e) => {
         setTitle(e.target.value);
       }}
      
      />

{/*TEXT FIELD : body*/}
      <TextField label="Body" fullWidth className={style.fields}
       value={body}
       onChange={(e) => {
         setBody(e.target.value);
       }}
      
      />

{/*TEXT FIELD : Date*/}
      <TextField label="Date" fullWidth className={style.fields}
       value={date}
       onChange={(e) => {
         setDate(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : SECTION*/}
      <TextField label="Links(if any)" fullWidth className={style.fields}
       value={links}
       onChange={(e) => {
         setLink(e.target.value);
       }}
      
      />
 {/*BUTTON : UPDATE notification*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.updBtn}
      onClick={(e) => {
          
        notificationService
            .updateNotification(id,{title,body,date,links})
            .then((data)=>{
              console.log(data);
              props.history.push("/notifications");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Update Notification
      </Button>
     </Grid>
  );
};

export default UpdateNotification;