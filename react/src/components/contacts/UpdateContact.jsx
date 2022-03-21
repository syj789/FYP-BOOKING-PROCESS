import React from "react";
import { Grid,Button,TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import contactService from "../../services/ContactsService";


const useStyles = makeStyles((theme) => ({
  fields: {
    
    right: theme.spacing(-10),
  },
  updBtn:{
    marginTop: 30,
    right: theme.spacing(-10)

  }
}));


const UpdateContact = (props) => {
  const [name, setName] = React.useState("");
  const [regid, setRegid] = React.useState("");
  const [contactnum, setContactnum] = React.useState("");
  const [section, setSection] = React.useState("");
  const [dep, setDep] = React.useState("");
  const style = useStyles();

  //fetch id 
  const id = props.match.params.id;
  //
  React.useEffect(() => {
    contactService.getSingleContact(id).then((data) => {
      setName(data.name);
      setRegid(data.regid);
      setContactnum(data.contactnum);
      setSection(data.section);
      setDep(data.dep);
    });
  }, []);


  return (
    <Grid container spacing={3}>
{/* UPDATE CONTACT HEADING*/}
      <Grid item xs={12}> <h1>Update Contact</h1> </Grid>

{/*TEXT FIELD : NAME*/}
      <TextField label="Contact Name" fullWidth className={style.fields} 
       value={name}
       onChange={(e) => {
         setName(e.target.value);
       }}
      
      />

{/*TEXT FIELD : Registration ID*/}
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

 {/*BUTTON : UPDATE CONTACT*/}
      <Button 
      variant="contained" 
      color="primary" 
      className={style.updBtn}
      onClick={(e) => {
          
            contactService
            .updateContact(id,{name,regid,contactnum,section,dep})
            .then((data)=>{
              console.log(data);
              props.history.push("/contacts");

            })
            .catch((err)=>{
              console.log(err);
            });
          }}
          >
      Update Contact
      </Button>
     </Grid>
  );
};

export default UpdateContact;