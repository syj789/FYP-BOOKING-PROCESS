import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "./images/wood-bg.jpg";
import Contacts from "./contacts/Contacts";
import contactService from "../services/ContactsService";
const useStyles = makeStyles((theme) => ({

}));

const Contact_cr = () => {
  return (
    <div style={{backgroundImage: 'url(' + Image + ')',}}>
      <h1 style={{fontFamily:"timesnewroman",fontWeight:"30px",marginTop:"50px"}}>Departments</h1>
<hr />
    <div style={{marginLeft:"450px",marginTop:"100px"}}>
      <img style= {{width:"60%"}}  src={require("./images/comp.jpg")} />
      <h3 style={{color:"white",marginLeft:"150px",marginTop:"-180px"}}>Computer Science <hr /></h3>
      <Button 
      style={{color:"white",marginLeft:"150px",marginTop:"-40px"}}
      variant="contained"
            color="primary"
            onClick={(e) => {
              
              contactService
              .getContact()
              .then((data) => {
                console.log(data);
                window.location.href = "/contacts";
              })
              .catch((err) => {
                console.log(err);
              });
      }}

      >View Batches</Button>
    </div>
<br />
    </div>
  );
};

export default Contact_cr;




