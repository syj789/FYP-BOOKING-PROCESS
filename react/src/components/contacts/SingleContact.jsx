import React from 'react';
import { Button } from "@material-ui/core";
import contactService from "../../services/ContactsService";
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



const SingleContact = (props) => {
  const{contact,onDelete,history} = props;
  console.log(props);
  const style = useStyles();
    return (
    <div>
        <h2 className={style.mainh}>{contact.section} 
        
        {userService.isAdmin() && (
        <>
        <Button
         variant="contained" color="primary"
         className={style.Btn}
         style={{backgroundColor:"#88e916"}}
         onClick={(e) => {
          console.log("navigate to update");
          history.push("/contacts/update/" + contact._id);

        }}
         >
          Edit
         </Button>
        <Button variant="contained" color="secondary" className={style.Btn}
        onClick={(e) => {
          contactService
            .deleteContact(contact._id)
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
        <p className={style.genh}>{contact.name}  |  {contact.dep}  |  {contact.regid} |  {contact.contactnum}</p>
        
      
    </div>

  );
}
 
export default withRouter(SingleContact);
