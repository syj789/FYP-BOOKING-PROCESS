import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import contactService from "../../services/ContactsService";


const useStyles = makeStyles((theme) => ({
  fields: {
    
    right: theme.spacing(-10),
  },
  addBtn:{
    marginTop: 30,
    right: theme.spacing(-10)

  },
  mainh:{
    fontFamily:"timesnewroman",
    fontSize:"30px",
    marginLeft:"82px",
    marginTop:"50px",
    marginBottom:"20px"
  }

}));


const NewContact = (props) => {
  const [name, setName] = React.useState("");
  const [regid, setRegid] = React.useState("");
  const [contactnum, setContactnum] = React.useState("");
  const [section, setSection] = React.useState("");
  const [dep, setDep] = React.useState("");
  const style = useStyles();


  return (
    <Grid container spacing={3}>
{/* ADD NEW CONTACT HEADING*/}
   <h1 className={style.mainh}>Add New Contact <hr /></h1>
  
{/*TEXT FIELD : CR NAME*/}
      <TextField label="CR Name" fullWidth className={style.fields} 
       value={name}
       onChange={(e) => {
         setName(e.target.value);
       }}
      
      />

{/*TEXT FIELD : REG ID OF CR*/}
      <TextField label="Registration ID" fullWidth className={style.fields}
       value={regid}
       onChange={(e) => {
         setRegid(e.target.value);
       }}
      
      />

{/*TEXT FIELD : Contact Number*/}
      <TextField label="Contact Number" fullWidth className={style.fields}
       value={contactnum}
       onChange={(e) => {
         setContactnum(e.target.value);
       }}
      
      />

 {/*TEXT FIELD : SECTION*/}
      <TextField label="Section" fullWidth className={style.fields}
       value={section}
       onChange={(e) => {
         setSection(e.target.value);
       }}
      
      />

{/*TEXT FIELD : DEPARTMENT*/}
<TextField label="Department" fullWidth className={style.fields}
       value={dep}
       onChange={(e) => {
         setDep(e.target.value);
       }}
      
      />


 {/*BUTTON : ADD COURSE*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.addBtn}
      onClick={(e) => {
          
            contactService.addContact
            ({name,regid,contactnum,section,dep})
            .then((data)=>{
              console.log(data);
              props.history.push("/contacts");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Add New Contact
      </Button>
     </Grid>
  );
};

export default NewContact;