import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import notificationService from "../../services/NotificationsService";


const useStyles = makeStyles((theme) => ({
  fields: {
    
    right: theme.spacing(-10),
  },
  addBtn:{
    marginTop: 30,
    right: theme.spacing(-10)

  }
}));


const NewNotification = (props) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [date, setDate] = React.useState("");
  const [links, setLink] = React.useState("");
  const style = useStyles();


  return (
    <Grid container spacing={3}>
{/* ADD NEW COURSE HEADING*/}
      <Grid item xs={12}> <h1>Add New Notification</h1> </Grid>

{/*TEXT FIELD : TITLE*/}
      <TextField label="Title" fullWidth className={style.fields} 
       value={title}
       onChange={(e) => {
         setTitle(e.target.value);
       }}
      
      />

{/*TEXT FIELD : BODY*/}
      <TextField label="Body" fullWidth className={style.fields}
       value={body}
       onChange={(e) => {
    setBody(e.target.value);
       }}
      
      />

{/*TEXT FIELD : DATE*/}
      <TextField label="Date" fullWidth className={style.fields}
       value={date}
       onChange={(e) => {
         setDate(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : Links*/}
      <TextField label="Links" fullWidth className={style.fields}
       value={links}
       onChange={(e) => {
         setLink(e.target.value);
       }}
      
      />
 {/*BUTTON : ADD Notification*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.addBtn}
      onClick={(e) => {
          
        notificationService.addNotification
            ({title,body,date,links})
            .then((data)=>{
              console.log(data);
              props.history.push("/notifications");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Add New Notification
      </Button>
     </Grid>
  );
};

export default NewNotification;