import React from "react";
import SingleContact from "./SingleContact";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import contactService from "../../services/ContactsService";
import userService from "../../services/UserService";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    top: theme.spacing(11),
    right: theme.spacing(2),
    marginTop:"130px",
    padding:"43px",
  
  },

  contactstyling:{
     marginTop:"50px"
  },

  contacthd:{
    marginTop:"40px",
    fontFamily:"timesnewroman",
    fontSize:"40px",

 }
}));



const Contacts = (props) => {

  const[contacts,setContacts] = React.useState([]);
  const style = useStyles();

  const getData = () => {
    contactService
      .getContact()
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //get data
  React.useEffect(getData,[]);
  //console.log("Inside Contacts Components");

  //NEW COURSE HANDLER
  const handleNewContactClick = () => {
    console.log(props);
    props.history.push("/contacts/new");
  };


return (

    <div>
      <h1 className={style.contacthd}>Contacts</h1> 
      <hr />
      
{/*SHOW ADD BUTTON only to logged in user who is Admin */}
<>
      {(userService.isLoggedIn() && userService.isAdmin() ) &&  ( 
      <Fab color="primary" aria-label="add" className={style.addBtn}   
      onClick={handleNewContactClick}>
        Add Contacts
      </Fab>
      )}
</>

<> 
  {contacts.length === 0 ? (<p>There are no contacts</p>) 
        :
        (
            <div className={style.contactstyling}>
              {contacts.map((contact,index) => 
                  (
                      
                      <SingleContact key={index} contact = {contact} onDelete={getData} />
                  )
              )}
           </div>
        )
  }
</>
  
</div>   
  
);
};

export default Contacts;
